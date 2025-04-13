import { useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setnumbers] = useState(false);
  const [spcharacters, setspcharacters] = useState(false);
  const [uppercase, setuppercase] = useState(false);

  return (
    <>
      <h1 className='text-3xl text-center text-white'>PASSWORD GENERETOR</h1>
    </>
  )
}

export default App
