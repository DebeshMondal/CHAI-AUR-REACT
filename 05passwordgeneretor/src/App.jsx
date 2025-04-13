import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setnumbers] = useState(false);
  const [spcharacters, setspcharacters] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [password, setpassword] = useState('');
  const [copy, setcopy] = useState(false);


  const passwordgenerator =  useCallback(()=>{
    let password = '';
    let str ="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z "
    if(numbers){
      str += '0123456789'
    }

    if(spcharacters){
      str += '!@#$%^&*()_+'
    }
    if(uppercase){
      str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    } 
    for(let i=0; i<=length; i++){
      password += str.charAt(Math.floor(Math.random() * str.length+1))
    }
    setpassword(password)
    setcopy(true)

  },[length, numbers, spcharacters, uppercase,setpassword, setcopy]);



  return (
    <>
      <h1 className='text-3xl text-center text-white'>PASSWORD GENERETOR</h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-blue-700 bg-blue-200'>

         <div className='flex shadow rounded-lg overflow-hidden '>
          <input
           type="text "
           value={password}
           className='outline-none w-full px-4 py-2 text-lg bg-blue-200'
            placeholder='Password'
            readOnly
           />

         </div>

      </div>
    </>
  )
}

export default App
