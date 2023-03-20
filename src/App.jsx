import { useState } from 'react'
import grognakLogo from './assets/grognaks-meats.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={grognakLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Let's Count with Grognak!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Elf Flank Steaks: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
