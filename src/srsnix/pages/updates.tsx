import React, { useRef, useState } from 'react';

export default function SeriouslyUpdates() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [postDate, setPostDate] = useState('');
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [body, setBody] = useState('');
  const [bodyCharCount, setBodyCharCount] = useState(0);
  const [files, setFiles] = useState<File[]>([]);

  const insertAtCursor = (text: string) => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const before = textarea.value.substring(0, start);
      const after = textarea.value.substring(end);
      textarea.value = before + text + after;
      textarea.selectionStart = textarea.selectionEnd = start + text.length;
      textarea.focus();
      setBody(textarea.value); // Update body state
      setBodyCharCount(textarea.value.length); // Update character count
    }
  };

  const handleThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setThumbnail(file);
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
    } else {
      setThumbnailPreview(null);
    }
  };

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    setFiles(selectedFiles);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setBody(value);
    setBodyCharCount(value.length); // Update character count
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('postDate', postDate);
    formData.append('title', title);
    formData.append('body', body);
    if (thumbnail) {
      formData.append('thumbnail', thumbnail);
    }
    files.forEach((file, index) => {
      formData.append(`files`, file);
    });

    // Enhanced logging to inspect FormData entries
    console.log('FormData entries:');
    formData.forEach((value, key) => {
      if (value instanceof File) {
        console.log(`${key}: ${value.name} (File)`);
      } else {
        console.log(`${key}: ${value}`);
      }
    });

    try {
      console.log('formData:', formData);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/nix/postsiteupdate`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ width: '50%', margin: '12px auto', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
      <p style={{ fontSize: '1.25rem' }}>Post an Update</p>

      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '12px', display: 'inline-block', width: '50%' }}>
          <label htmlFor="thumbnail">Upload Thumbnail:</label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            onChange={handleThumbnailChange}
            style={{ marginLeft: '10px' }}
            required
          />
          {thumbnailPreview && (
            <div style={{ marginTop: '10px' }}>
              <img 
              src={thumbnailPreview} 
              alt="Thumbnail Preview" 
              style={{ width: '100px', height: '100px', marginRight: '4px' }} 
              />
            </div>
          )}
        </div>

        <div style={{display:'inline-block', verticalAlign:'top', width:'50%'}}>
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="title">Post Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginLeft: '10px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="postDate">Post Date:</label>
            <input
              type="date"
              id="postDate"
              name="postDate"
              value={postDate}
              onChange={(e) => setPostDate(e.target.value)}
              style={{ marginLeft: '10px' }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <div style={{ marginBottom: '12px' }}>
            <button type="button" onClick={() => insertAtCursor('**bold**')} style={{ marginRight: '5px' }}>Bold</button>
            <button type="button" onClick={() => insertAtCursor('_italic_')} style={{ marginRight: '5px' }}>Italic</button>
            <button type="button" onClick={() => insertAtCursor('`code`')} style={{ marginRight: '5px' }}>Code</button>
            <button type="button" onClick={() => insertAtCursor('[text](url)')} style={{ marginRight: '5px' }}>Link</button>
            <button type="button" onClick={() => insertAtCursor('![imgtext](url)')} style={{ marginRight: '5px' }}>Image</button>
            <button type="button" onClick={() => insertAtCursor('> quote')} style={{ marginRight: '5px' }}>Quote</button>
            <button type="button" onClick={() => insertAtCursor('- list item')} style={{ marginRight: '5px' }}>List</button>
            <button type="button" onClick={() => insertAtCursor('- [ ] task item')} style={{ marginRight: '5px' }}>Task Item</button>
          </div>
          <textarea
            id="body"
            name="body"
            rows={4}
            value={body}
            onChange={handleBodyChange}
            style={{ marginLeft: '10px', width: '100%', height: '200px' }}
            ref={textareaRef}
            required
          ></textarea>
          <div style={{ textAlign: 'right', color: 'rgb(138, 138, 138)' }}>{bodyCharCount} characters</div>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="files">Upload Files (max 20):</label>
          <input
            type="file"
            id="files"
            name="files"
            multiple
            onChange={handleFilesChange}
            style={{ marginLeft: '10px' }}
            accept="image/*,video/*,application/pdf" // Optional: restrict file types
          />
          {files.length > 0 && (
            <ul style={{ marginTop: '10px', textAlign: 'left' }}>
              {files.map((file, index) => (
          <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" style={{ marginTop: '12px' }}>Submit</button>
      </form>

      todo: add preview page, better multi-file uploading
    </div>
  );
}