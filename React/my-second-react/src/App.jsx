
import './App.css'
import Counter from './Count'
import Users from './user'
import Friends from './Friends'

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
      <Users></Users>
      <Counter></Counter>
      
      {/* Using Normal Function */}
      <button onClick={handleClick}>Click ME</button>
      {/* Using Arrow Function */}
      <button onClick={handleClick2}>Click ME Again 2</button>
      {/* Inside onClick , Arrow Function */}
      <button onClick={() => {alert('Third Times Clicked')}}>Click 3</button>
      {/* Using Function With Parameter */}
      <button onClick={() => addToFive(5)}>Click 4</button>
      <Friends></Friends>
    </>
  )
}

export default App
