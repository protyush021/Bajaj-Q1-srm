import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (data) => {
    try {
      const res = await fetch('https://bajaj-protyush021s-projects.vercel.app/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend</h1>
        <Form onSubmit={handleSubmit} />
        <Results data={response} />
      </header>
    </div>
  );
}

export default App;
