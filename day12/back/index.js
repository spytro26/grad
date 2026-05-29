import express from "express"
const app = express();
app.use(express.json());

 const  users = [] ;
 const loginedUsers = [];
  let a = 0 ; 
  
// {
//     id : 2,

//     "name" : "user "
//     username  : "any" , 
//     password : "nls" , 
//     balance : "jlsj"
// }

function getToken(){
    let arr = [ 1 , "a" , "b" , "s" , 2 , 3 , 4];
    let  ab="";
    let size = arr.length -1 ;  
    for(let i = 0; i<10; i++){
    ab +=   arr[parseInt(size * Math.random())]
    }
    
    return "123"; 
}

function  ispresent(username  ){

    for(let i =0; i<users.length ; i++){
                if(users[i].username == username){
                    return false;
                }

    }
    return true; 

}

app.get("/" , (req , res )=>{
    console.log("alive");
    return res.json({alive : "alive "});

})


app.post("/signup" , (req , res)=>{
    const {name , username , password } = req.body;


      // username ? 
      // phone no ? 
      // password 
    
      if(password.length <  8 ){
        return res.status(400).json({message : "weak password"})
      }

      if(!ispresent(username)){
        return res.status(401).json({message : "username already taken "});

      }
      
      a++
      users.push({
        id : a  , 
        name   ,
        username : username  , 
        password  : password  ,
        balance : 2000  



      })
      

      return res.status(201).json({msg : "user id created succefully" , a });




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


    const token = getToken();
    loginedUsers.push({
        id :  userId , 
        token  , 
    })

    return res.json({token : token });




    


    
})


function checkAuth(req , res , next){
    const {id , token} = req.body;
    console.log("middleware");
    for(let i =0; i<loginedUsers.length; i++)
    {
        if(loginedUsers[i].id == id && loginedUsers[i].token == token){
            // req.userid = id; 
            next();
        }
    }

    console.log("not next");
    return res.json({message : "invalid user"});

}


app.use(checkAuth);

app.get("/bal" , (req , res)=>{
    // id password 
    console.log("hiteed");
    const {id} = req.body;
    for(let i =0; i<users.length ; i++){
        if(id == users[i].id){
            return res.json({balance : users[i].balance});
        }
    }


  



    
})

app.get("/userDetails"  , (req , res)=>{

})

app.post("/kyc" , (req , res)=>{

})


app.listen(3000);
