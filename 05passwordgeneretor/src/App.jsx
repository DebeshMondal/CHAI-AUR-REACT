import { useCallback, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setnumbers] = useState(false);
  const [spcharacters, setspcharacters] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [password, setpassword] = useState('');
  const [copy, setcopy] = useState(false);

  const passwordgenerator = useCallback(() => {
    let password = '';
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (numbers) {
      str += '0123456789';
    }
    if (spcharacters) {
      str += '!@#$%^&*()_+';
    }
    if (uppercase) {
      str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }

    setpassword(password);
    setcopy(true);
  }, [length, numbers, spcharacters, uppercase]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setcopy(true);
    setTimeout(() => {
      setcopy(false);
    }, 2000);
  };

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-400 bg-[#0f172a]'>
        <h1 className='text-2xl text-center text-white mb-4 font-semibold'>Password generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-4 text-black rounded-md bg-white'
            placeholder='Password'
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-xl'
          >
            {copy ? "Copied!" : "COPY"}
          </button>
        </div>

        <div className='flex flex-wrap text-sm gap-x-2 gap-y-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(Number(e.target.value))}
            />
            <label>length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={numbers}
              id="numberInput"
              onChange={() => setnumbers(prev => !prev)}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={spcharacters}
              id="spcharactersInput"
              onChange={() => setspcharacters(prev => !prev)}
            />
            <label htmlFor="spcharactersInput">Include Special Characters</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={uppercase}
              id="uppercaseInput"
              onChange={() => setuppercase(prev => !prev)}
            />
            <label htmlFor="uppercaseInput">Include Uppercase</label>
          </div>
        </div>

        <button
          onClick={passwordgenerator}
          className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition'
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
