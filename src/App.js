import React, { useState } from 'react';
function App() {
  
  const [color, setColor]= useState("olive")
  return (
    <div className="w-full h-screen "
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-11 shadow-lg bg-white rounded-3xl p-3 border-none">

          <button className="bg-red-600 rounded-full shadow-lg text-white font-bold p-5 hover:bg-red-500 active:bg-red-400" onClick={()=> {setColor("Red")}}>Red</button>

          <button className="bg-green-600 shadow-lg rounded-full text-white font-bold p-5 hover:bg-green-500 active:bg-green-400" onClick={()=> {setColor("Green")}} >Green</button>

          <button className="bg-blue-600 shadow-lg rounded-full text-white font-bold p-5 hover:bg-blue-500 active:bg-blue-400" onClick={()=> {setColor("Blue")}} >Blue</button>

          <button className="bg-yellow-600 shadow-lg rounded-full text-white font-bold p-5 hover:bg-yellow-500 active:bg-yellow-400" onClick={()=> {setColor("yellow")}} >Yellow</button>

          <button className="bg-purple-600 shadow-lg rounded-full text-white font-bold p-5 hover:bg-purple-500 active:bg-purple-400" onClick={()=> {setColor("Purple")}} >Purple</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
