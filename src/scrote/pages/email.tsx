import React, { useState } from 'react';

const preMadeAddresses = [
    'webmonger@scrote.org',
    'crabshadyfan@scrote.org',
    'an_cornhole@scrote.org',
    'marketing@scrote.org',
    'sfmi@scrote.org',
    // Move to text file at some point
];

export default function ScroteEmail() {
    const [selectedAddress, setSelectedAddress] = useState(preMadeAddresses[0]);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('');
    const [recipient, setRecipient] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const emailData = {
            from: selectedAddress,
            to: recipient,
            subject,
            text: body,
            html: null,
        };

        try {
            alert(JSON.stringify(emailData));
            const response = await fetch(`${import.meta.env.VITE_API_URL}/scrote/sendmail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });

            if (response.ok) {
                setStatus('Email sent successfully!');
            } else {
                setStatus('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Error sending email.');
        }
    };

    return (
        <main style={{ flex: 5, padding: '1rem' }}>
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Send Email</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" style={{display: 'inline-block'}} >Select Address:</label>
                            <select
                                id="email"
                                value={selectedAddress}
                                onChange={(e) => setSelectedAddress(e.target.value)}
                                style={{ marginLeft: '10px', display: 'inline-block' }}
                            >
                                {preMadeAddresses.map((address, index) => (
                                    <option key={index} value={address}>
                                        {address}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="recipient">Recipient Email:</label>
                            <input
                                type="email"
                                id="recipient"
                                value={recipient}
                                onChange={(e) => setRecipient(e.target.value)}
                                style={{ width: '100%' }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                style={{ width: '100%' }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body:</label>
                            <textarea
                                id="body"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                style={{ width: '100%', height: '200px' }}
                                required
                            ></textarea>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                            <button type="submit">Send Email</button>
                            <button type="button" disabled title='Coming Soon!'>Attach Files</button>
                        </div>
                    </form>
                    {status && <div style={{ marginTop: '10px', color: 'red' }}>{status}</div>}
                </div>
            </div>
        </main>
    );
}