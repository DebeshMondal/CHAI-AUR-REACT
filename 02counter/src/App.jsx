import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
   let [counter,setcounter] = useState(15)

   //let counter = 15  // counter value

  const addValue = () => {
    // console.log("Add value",Math.random());
      if (counter < 20){
    //counter = counter + 1
    setcounter(counter+1)
      }
    
  };

  const RemoveValue = () => {
    if (counter > 0){
    setcounter(counter-1)
    }
  };

  return (
    <>
     
     <h1>Chai aur react</h1>  
      <h2>Counter value: {counter}</h2>
      {/* <h2>Added value: {counter}</h2>
      <h2>Removed value: {counter}</h2> */}

      
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={RemoveValue}
      >Remove value</button>
    </>
  )
}

export default App
