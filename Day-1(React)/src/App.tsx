import { useState } from "react";
function App(){
  let [noti , useNoti] = useState(0);
    function Plus(){
      if(noti>=0) useNoti(noti++);
      else{
        useNoti(noti= 1);
      }
    }
    function Minus(){
        if(noti>=0){
        useNoti(noti--);
    }

    }

    function Restart(){
      useNoti(noti=0);
    }
      //@ts-ignore
  return <div style={{backgroundColor:"black",height:"100vh"}}>
  <LearnComponent des  title  numb= {noti}>  </LearnComponent>
  <div style={{ }}>
    <h1 style={{color:"white"}}>Counter App</h1>
  <div style={{}}>
  <button onClick={Restart} style={{height: '60px', width: '90px',borderRadius:'13px',padding:'20px',marginTop:"30px"}}>Restart</button>
  </div>
<div style={{marginTop:"190px"}}>
  <div style={{display:"flex" , alignItems:"center", justifyContent:"space-between",}}>
<div>
<button onClick={Minus} style={{height: '60px', width: '60px', borderRadius:'13px'}}  >-</button>
</div>
  
    <div style={{color:"white", fontSize: "115px"}}>{noti} </div>
<div >
  <button onClick={Plus} style={{height: '60px', width: '60px',borderRadius:'13px' }} >+</button>
</div>
</div>
  </div>
  </div>
  
</div>
}


function LearnComponent({des , numb, title }:any){
  return <div>  
    </div>
}
export default App
