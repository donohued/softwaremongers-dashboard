import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });

      const data = await response.json();
      if (response.ok) {
        navigate('/scrote');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="window" style={{width: "300px", margin: "50px auto"}}>
  <div className="title-bar">
    <div className="title-bar-text">Login Form</div>
    <div className="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div className="window-body">
  <div className="login-container">
      <h2>Login</h2>

      <form id="loginForm" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type='text' id="username" name="username" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group">
          <button type="submit">Login</button>
        </div>

        {error && <div className="error" id="error">{error}</div>}
      </form>

    </div>
  </div>
</div>
    
  );
}