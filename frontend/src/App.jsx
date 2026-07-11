import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>APILens</h1>
        <h3>Analyze Postman Collections</h3>
      </div>
      <div className="button">
        <button>Upload Collection</button>
      </div>
    </>
  )
}

export default App
