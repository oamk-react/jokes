import './App.css';
import {useState} from 'react';
 
const URL = 'https://official-joke-api.appspot.com/random_joke';

function App() {
  const [setup,setSetup] = useState('Get random (and bad) jokes!');
  const [punchline,setPunchline] = useState('Start by pressing that button');

  async function getJoke(e) {
    e.preventDefault();
    try {
      const response = await fetch(URL);

      if (response.ok) {
        const json = await response.json();
        setSetup(json.setup);
        setPunchline(json.punchline);
      } else {
        alert('Error retrieving joke!');
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div style={{margin:50}}>
      <h3>Random jokes</h3>
      <form onSubmit={getJoke}>
        <p>{setup}</p>
        <p>{punchline}</p>
        <button>Get another one</button>
      </form>
    </div>
  );
}

export default App;
