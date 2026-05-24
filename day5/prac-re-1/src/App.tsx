import { useState } from "react";

function App () {

  let [noti , useNoti] = useState(10);
   

  function update() {
    useNoti(noti+1);

 }

  // @ts-ignore
  return <div>
    
     <LearningComp des="this is description " title = "this is title "  numb = {noti}>  </LearningComp>
     <LearningComp des="this is description 2 "  title = "this is title 2 "  numb = {noti} />
     <div onClick={update}>
      click to add notification 

    </div>
  </div>
 
 // 


}






function  LearningComp ({des  , numb , title   } : any ) {

  


  return <>
    <div style={{display : "flex"    }}>
      <div style={{marginRight:"30px"}}>
        {numb}
      </div>
      <div style={{marginRight:"30px"}}>
        {title}
      </div>
      <div>
        {des}
      </div>
    <div> 
      this is example 
    </div>

    </div>

    
  </>


}

export default App;