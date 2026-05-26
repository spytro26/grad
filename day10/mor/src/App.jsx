import { useEffect, useRef, useState } from 'react'

import './App.css'
  
function App() {
  const [listTodo , setListTodo] = useState([]);
  const [fil , setFil ] = useState('all');
  const[list , setList]  = useState([]);
  useEffect(()=>{
    // completed , all , pending 
    if(fil == "all"){
      setList(listTodo)
      
    }
    else if(fil=="pending"){
      let ans = listTodo.filter((x)=>{
       if(x.done == false){
        return true;
       }

       else {
        return false; 
       }

      })
      setList(ans);
      

    }
    else {
       let ans = listTodo.filter((x)=>{
       if(x.done == true){
        return true;
       }

       else {
        return false; 
       }

      })
      setList(ans);

      
      



    }

  } , [fil  , listTodo])

  // const demo = {
  
  //   title : "eat " , 
  //   done :  false , 
    
  // }
  const inputRef  = useRef();


   function addTodo() {
          let value   = inputRef.current.value;
          const demo = {
            title : value , 
            done : false
          }

          setListTodo((a)=>{
           return  [...a , demo]
          })



   }


     function mark (idx) {
      for(let i = 0; i<list.length; i++){
        if(i == idx){
          list[i].done = true;
        }
      }


     }


     function del (idx){
      // array delete
      let li = list.filter((x , id )=>{
        if(id == idx){
          return false;

        }
        else {
          return true;
        }

      });
      
      setList(li);





     }



    return  <div className='min-h-screen min-w-screen bg-[#33abdb]'>
      <div className='text-white text-4xl font-bold text-center pt-10'>
             To Do List 
        </div>
      <div className='flex justify-center mt-10'>
          <div className='flex relative'>
             <div>
                   <input ref={inputRef} className='bg-white p-2' type="text" />
             </div>
             <div onClick={addTodo} className='absolute ml-48'> 
              <img src="https://img.icons8.com/?size=100&id=59864&format=png&color=FD7E14"  width={40}  alt="" />
             </div>
          </div>

          <div className='ml-4'>
           <select className='bg-orange-400 p-2  ' onChange={(e)=>{return setFil(e.target.value)}}>
                <option value="all"> All</option>
                <option value="pending"> Pending</option>
                <option value="completed"> completed</option>


           </select>
          </div>

      </div>

      <div className='flex flex-col items-center'>
            {list.map((x, index )=>{
              return <div>
                <div>
                      {x.title}
                </div>
                <div onClick={()=>mark(index)}>
                  mark as done 
                </div >
                <div onClick={()=>del(index)}>
                  delete 
                </div>
              
   

                </div>
            
              

            })}
        
     
      </div>
       



    </div>
 
}

export default App
