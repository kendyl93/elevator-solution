import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState();

  const handleClick = async () => {
    const results = await axios.get('http://localhost:4000/api');

    if (results.status === 200) {
      setData(results.data.body);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Download data from API</button>
      {data}
    </div>
  );
};
export default App;
