import { useEffect } from "react";

export function useDebaunce(x){
    // 

    useEffect(()=>{
        const a = setTimeout(backendCall, 2000);

          return (()=>{
            clearTimeout(a);

          })

            





    }  , [x])
}



// 6 digit 
// -  -  -  -  -  - 
// 10 6 

