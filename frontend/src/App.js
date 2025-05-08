import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    fetch('/api/')
      .then(res => res.text())
      .then(setTime);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Fullstack DevOps Project</h1>
      <p>{time || 'Loading...2'}</p>
    </div>
  );
}

export default App;
