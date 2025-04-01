import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
   const [counter,setcount] = useState(15)

   //let counter = 15  // counter value

  const addValue = () => {
    // console.log("Add value",Math.random());

    counter = counter + 1
    setcount(counter)
    console.log("Counter value now: ",counter);

    
  }

  const RemoveValue = () => {
    
    counteer = counter - 1
    console.log("Counter value now: ",counter);
    
  }

  return (
    <>
     
     <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onclick={RemoveValue}
      >Remove value</button>
    </>
  )
}

export default App
