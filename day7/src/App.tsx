import { useEffect, useState } from "react"

// useEffect
export default function App () {

// runs on the first mount 
 


 let anku  = ()=>{
    async function getData () {
      try {
        let a = await  fetch('https://jsonplaceholder.typicode.com/todos/1');
        let b =  await a.json();
        console.log(b);
          
      } catch(e){
        console.log("error occured during fetch");
      }
       
   }

   getData();
  console.log("data fetched from the backeend ");


 }
  const [fl , useFl ] = useState();

useEffect( anku , []);

 

  const [visible , useVisible] = useState(true);

function vis (x : any ){
  useVisible(x);

}
 

  return <div> 
    <div onClick={()=>vis(true)}>
      click to make it visible
    </div>
    <div onClick={()=>vis(false)}>
      click to make it invisible
    </div>
    <div>
        {/* // @ts-ignore */}
     {visible && <p> this is conditionally rendered </p>}
    </div>

  </div>
}