import React from 'react';

function Results({ data }) {
  return (
    <div>
      <h2>Results:</h2>
      {data && (
        <div>
          <div><strong>Numbers:</strong> {data.numbers.join(', ')}</div>
          <div><strong>Alphabets:</strong> {data.alphabets.join(', ')}</div>
          <div><strong>Highest Alphabet:</strong> {data.highest_alphabet.join(', ')}</div>
        </div>
      )}
    </div>
  );
}

export default Results;
