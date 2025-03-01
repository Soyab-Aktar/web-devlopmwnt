import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Count'

//! Event Handler
function App() {
  function handleClick(){
    alert('Button Clicked');
  }

  const handleClick2 = () =>{
    alert('Button Clicked again 2');
  }

  const addToFive = (num) =>{
    alert(num+5);
  }

  return (
    <>
      <h2>React Concept</h2>

      <Counter></Counter>
      
      {/* Using Normal Function */}
      <button onClick={handleClick}>Click ME</button>
      {/* Using Arrow Function */}
      <button onClick={handleClick2}>Click ME Again 2</button>
      {/* Inside onClick , Arrow Function */}
      <button onClick={() => {alert('Third Times Clicked')}}>Click 3</button>
      {/* Using Function With Parameter */}
      <button onClick={() => addToFive(5)}>Click 4</button>
    </>
  )
}

export default App
