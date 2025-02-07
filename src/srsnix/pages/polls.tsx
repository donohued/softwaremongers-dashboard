import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Poll {
  date: string;
  question: string;
  options: string[];
}

export default function SeriouslyPolls() {
  const navigate = useNavigate();

  const [polls, setPolls] = useState<Poll[]>([]);
  const [date, setDate] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>(['']);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/nix/getpolltopics`, {
          credentials: 'include'
        });
        const data = await response.json();
        setPolls(data);
      } catch (error) {
        console.error('Error fetching poll topics:', error);
      }
    };

    fetchPolls();
  }, []);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOptionField = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newPoll: Poll = { date, question, options };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/nix/postpolltopic`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPoll),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);

      // Update the polls list with the new poll
      setPolls([...polls, newPoll]);

      // Reset form fields
      setDate('');
      setQuestion('');
      setOptions(['']);
    } catch (error) {
      console.error('Error adding new poll:', error);
    }
  };

  return (
    <div style={{ width: '50%', margin: '12px auto', justifyContent: 'center', textAlign: 'left', color: 'white' }}>

      <h3 style={{ marginBottom: '12px', textAlign: 'center' }}>Poll Page</h3>

      <h4 style={{margin:'0px'}}>Schedule New Poll</h4>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ marginLeft: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{ marginLeft: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <label>Options:</label>
          {options.map((option, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                style={{ marginLeft: '10px' }}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addOptionField} style={{ marginLeft: '10px' }}>
            Add Option
          </button>
        </div>
        <button type="submit" style={{ marginTop: '12px' }}>Submit</button>
      </form>

<hr />

<h3 style={{ marginBottom: '12px', textAlign: 'center' }}>Current and Upcoming Polls</h3>

      {polls.length > 0 ? (
        <ul>
          {polls.map((poll, index) => (
        <li key={index}>
          <h4 style={{margin:'0px'}}>{poll.question}</h4>
          <p>Date: {poll.date}</p>
          <ul>
            {poll.options.map((option, idx) => (
          <li key={idx}>{option}</li>
            ))}
          </ul>
        </li>
          ))}
        </ul>
      ) : (
        <p>No polls available.</p>
      )}

        todo: add update ability, redesign, indicate current and previous polls
    </div>
  );
}