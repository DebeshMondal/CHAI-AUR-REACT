import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amount, setamount] = useState(0)
  const [from , setfrom] = useState('USD')
  const [to , setto] = useState('INR')
  const [result, setresult] = useState(0)

 const useCurrencyInfo = useCurrencyInfo(from)

 const options = Object.keys(useCurrencyInfo)

 const swap = () => {

  setfrom(to)
  setto(temp)
  setConvertedAmount(amounnt)
  setamount(setConvertedAmount)
 }

 const convert = () => {
  setConvertedAmount = (amount * CurrencyInfo[to]) 
  // / useCurrencyInfo[from]
 }

  return (
    <>
      <h1 ClassName='text-3xl bg-orange-500'>Currency App with Chai</h1>
    </>
  )
}

export default App
