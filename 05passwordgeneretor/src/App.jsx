import { useCallback, useState } from 'react';
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
      password += str.charAt(Math.floor(Math.random() * str.length));
    }

    setpassword(password);
    setcopy(true);
  }, [length, numbers, spcharacters, uppercase]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 bg-[#0f172a]'>
        <h1 className='text-2xl text-center text-white mb-4 font-semibold'>Password generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-4 text-black rounded-md bg-white'
            placeholder='Password'
            readOnly
          />
        </div>

        {/* Optional: Add Generate button to test */}
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
