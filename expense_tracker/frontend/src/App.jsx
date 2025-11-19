import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/home`)
      .then(response => setMessage(response.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ fontSize: "24px", padding: "20px" }}>
      React Frontend Says: {message}
    </div>
  );
}

export default App;
