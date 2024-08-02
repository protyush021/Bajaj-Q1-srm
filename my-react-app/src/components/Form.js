import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(input);
      onSubmit(data);
    } catch (error) {
      alert('Invalid JSON');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON here'
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
