import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Hello Friends
      </p>
      <Person></Person>
      <Country></Country>
    </>
  )
}
function Person (){
  return <h1 className='person'>Soyab Aktar {34}</h1>
}
function Country(){
  const countryCss = {
    color : `cyan`,
    margin : `12px`
  }
  return (
    <h3 style={countryCss}>My Country is INDIA</h3>
  )
}

export default App
