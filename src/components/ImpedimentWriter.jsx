import React, { useState } from 'react';

const ImpedimentWriter = () => {
  // State to store the current impediment being written
  const [impediment, setImpediment] = useState('');
  // State to store all submitted impediments
  const [impedimentsList, setImpedimentsList] = useState([]);

  // Handle the change in the input field
  const handleChange = (e) => {
    setImpediment(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents page reload
    if (impediment.trim()) {
      setImpedimentsList((prevList) => [...prevList, impediment]);
      setImpediment('');  // Clear the input field after submission
    }
  };

  // Handle clearing the impediment list
  const handleClear = () => {
    setImpedimentsList([]);
  };

  return (
    <div>
      <h2>Write Your Impediments</h2>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={impediment}
          onChange={handleChange}
          rows="4"
          cols="50"
          placeholder="Describe your impediment..."
        />
        <br />
        <button type="submit">Submit Impediment</button>
      </form>

      <h3>Submitted Impediments:</h3>
      {impedimentsList.length > 0 ? (
        <ul>
          {impedimentsList.map((imp, index) => (
            <li key={index}>{imp}</li>
          ))}
        </ul>
      ) : (
        <p>No impediments submitted yet.</p>
      )}

      {impedimentsList.length > 0 && (
        <button onClick={handleClear}>Clear Impediments</button>
      )}
    </div>
  );
};

export default ImpedimentWriter;
