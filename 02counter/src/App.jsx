import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
   let counter = 15  // counter value

  const addValue = () => {
    console.log("Add value",Math.random());
    
  }

  return (
    <>
     
     <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
