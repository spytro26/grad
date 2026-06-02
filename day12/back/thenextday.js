import express from "express"
import jwt from "jsonwebtoken"
const app = express();
app.use(express.json());

 const  users = [] ;

  let a = 0 ; 
  




function  ispresent(x  ){

    for(let i =0; i<users.length ; i++){
                if(users[i].username == x){
                    return false;
                }

    }

    return true; 

}

function checkAuth(req, res , next) {
    const {token} = req.body;
     if(jwt.verify(token , "ankush")){
        next();
        return ;
     }
     else {
        return res.json({msg :'invlid user'});
     }

}


app.post("/signup" , (req , res)=>{
    const {name , username , password } = req.body;
    if(!name || !username  || !password){
        return res.json({message : "missing data"});

    }


      // username ? 
      // phone no ? 
      // password 
    
      if(password.length <  8 ){
        return res.status(400).json({message : "weak password"})
      }

      if(ispresent(username)==false ){
        return res.status(401).json({message : "username already taken "});

      }
      
      a++
      users.push({
        id : a  , 
        name    ,
        username : username  , 
        password  : password  ,
        balance : 2000  
        



      })
      

      return res.status(201).json({msg : "user id created succefully" , a   });




})


app.post("/signin" , (req , res)=>{
    const{username , password} = req.body;

    let  userPresent = 0;
    let userId  ; 
    for(let i =0; i<users.length ; i++){
        if(users[i].username == username && users[i].password == password){
            userPresent = 1; 
            userId = users[i].id;

        }
    }

    if(userPresent==0){
        return res.json({message : "invalid username or password"});

    }


      const token = jwt.sign({id : 2} , "ankush");


    return res.json({token : token });




    


    
})

app.use(checkAuth);


app.get("/bal"  ,  (req , res)=>{
    // id password 
 
    const {id } = req.body;
        console.log("code")

    for(let i =0; i<users.length ; i++){
        if(id == users[i].id ){
            return res.json({balance : users[i].balance});
        }
    }
    console.log("jlsj")
     
    return res.json({msg : "wrong pin or pin not enabled"})

  



    
})
app.listen(3000);