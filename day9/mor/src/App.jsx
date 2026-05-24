import { createContext, useContext, useState } from "react";
const con = createContext();
export default function App () {
      const [count  , setCount ] = useState(0);

   



    function useIncrease  () {
      const {count , setCount} = useContext(con);
         setCount(count+1);
         }

  return   <div>
      {count} 

   <con.Provider value={{count , setCount}}>
     useIncrease
   </con.Provider>

      <div onClick={useIncrease}>increase </div>
     
    </div>
    
}