import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-300 text-red-400 rounded-2xl mb-4'>Tailwind test</h1>

      <Card/>
      
    </>
  )
}

export default App
