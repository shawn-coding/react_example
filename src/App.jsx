import { useState } from 'react'
import grognakLogo from './assets/grognaks-meats.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  function handleInputChange(event) {
    setNewCount(event.target.value);
  }

  const newCountButton=() => {
    setCount(parseInt(newCount))
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={grognakLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Let's Count with Grognak!</h1>
      <div className="card">
        <label>Where to start?</label>
        <input type="number" value={newCount} onChange={handleInputChange}/>
        <button onClick={newCountButton}>Submit</button>
        <button onClick={() => setCount((count) => count + 1)}>
          Elf Flank Steaks: {count}
        </button>
      </div>
      <p>
        Grognak's Meats
      </p>
      <p className="read-the-docs">
        "Dat's Propa Orky!"
      </p>
    </div>
  )
}

export default App
