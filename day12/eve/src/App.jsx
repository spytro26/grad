import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const[response , setResponse] = useState('');
 useEffect(()=>{
         async function  getResponse(url){
          const a = await  fetch(url);
          const b  = await  a.json();
          setResponse(b);
        }
          getResponse("http://localhost:3000");
 } , []);


 return <div>

     {response.ankush}
     <div>
      this is respnose 
     </div>
     
 </div>
 
}

export default App
