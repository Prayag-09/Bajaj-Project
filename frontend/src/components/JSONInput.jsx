/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

const JSONInput = ({ setData }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {

      const parsedInput = JSON.parse(input);
      if (!Array.isArray(parsedInput.data)) {
        throw new Error('JSON must contain a "data" array.');
      }

      const response = await axios.post('https://bajaj.prayagtushar2016.workers.dev/bfhl', parsedInput);

      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Invalid JSON');
    }
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter your JSON here'
        style={{ width: '100%', height: '100px', marginBottom: '10px' }}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </div>
  );
};

export default JSONInput;
