// useRef , custom hooks 

import { useRef, useState } from "react";

// let    
// useState change -re render , value persists during the re render

// useRef   change - no re render , value persit
// const  a = useRef(233)   
// let b = 233;
// const [c , useC] = useState(233);

// let i =0; 
function App() {

  
  const inputRef = useRef();
  const [st , useSt] = useState(0);
  function test () {
    console.log(inputRef.current.value);
  }
  return <>
       <div onClick={()=>{useSt(1)}}>hii</div>

   <div onClick={()=>i += 10}> hello </div>
   <input type="text"  ref={inputRef} onChange={test} />

  </>
  
 
}

export default App

















