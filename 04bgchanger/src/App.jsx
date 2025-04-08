


import React, { useState } from 'react';

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200 flex justify-center items-center" style={{backgroundColor: color}}>
      <button
        onClick={() => setcolor("red")}
        className="px-4 py-2 rounded-lg shadow-lg text-white"
        style={{ backgroundColor: "black" }}
      >
        Red
      </button>
     </div>
    </>
  )
}

export default App
