import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json());
 app.use(cors({
  origin : ""
 }))

function a (req , res){
  
  return res.json({"ankush" : "raj"});


}
// middleware , cors
// function middle(req , id ){
//   if(req.id == id){
//     next();
//   }
//   return res.json({error : "invalid request "}) ;


     
// }

app.get("/"  , a )

app.get("/signup" , (req , res )=>{
  let {a , b} = req.body;
  
  return res.json({hi : "HIi"})
})

app.post("/login" , (req , res) =>{
  return res.json({hello : "bbye"})
})

// app.use(middle)

// app.get("/checkbalance" ,middle ,   (req, res)=>{

  
//   return res.json({});

// })


// app.put("/update profile " ,middle ,   ()=>{});
// app.delete("/deleteprofile" , ()=>{});



app.listen(3000 , ()=>{
  console.log("server is running on port 30000")
});
