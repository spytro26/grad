import express from "express"
const app = express();
app.use(express.json());

 const  users = [] ;
 const loginedUsers = [];
 const transactions = [] ;
  let a = 0 ; 
  



// {
//     id : 2,

//     "name" : "user "
//     username  : "any" , 
//     password : "nls" , 
//     balance : "jlsj"
// }

function getToken( ){
    let arr = [ 1 , "a" , "b" , "s" , 2 , 3 , 4 , 6, 7, 8, 9 , "c" , "e"];
    let  token="";
    let size = arr.length -1     ;  
    for(let i = 0; i<30; i++){
    token = token +   arr[parseInt(size * Math.random())]
    }
    
    return token; 
}

function  ispresent(x  ){

    for(let i =0; i<users.length ; i++){
                if(users[i].username == x){
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
        balance : 2000  ,
        pinEnabled : false , 
        pin : "" 



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


    const token = getToken();
    loginedUsers.push({
        id :  userId , 
        token  , 
    })

    return res.json({token : token });




    


    
})


function checkAuth(req , res , next){
    const {id , token} = req.body;
 
    for(let i =0; i<loginedUsers.length; i++)
    {
        if(loginedUsers[i].id == id && loginedUsers[i].token == token){
            // req.userid = id; 
         return    next();
        }
    }

   
    return res.json({message : "invalid user"});

}


 app.use(checkAuth);

 app.post("/setpin" , (req , res)=>{
    // 
   const {pin , id } = req.body;

   //otp

   for(let i =0; i<users.length ; i++){
        if(users[i].id == id){
            users[i].pin = pin;
            users[i].pinEnabled = true;
        }

   }
   return res.json({message : "pin set "})
     

    
 })



// improvement add upi pin functionality 
app.get("/bal"  ,  (req , res)=>{
    // id password 
 
    const {id ,pin} = req.body;
    if(!id || !pin){
        return res.json({message : "insufficent data for fetching balance"})
    }

    for(let i =0; i<users.length ; i++){
        if(id == users[i].id && pin == users[i].pin && pinEnabled){
            return res.json({balance : users[i].balance});
        }
    }
     
    return res.json({msg : "wrong pin or pin not enabled"})

  



    
})

// money transer user 1 - > 2 

// same improvment as /bal endpoint
 function moneytransfer(req , res){
    const {id , pin , recId , balance} = req.body;
    if(!recId || !balance){
        return ; 

    }
       let sender ; 
       for(let i=0; i<users.length ; i++){ 
            if(users[i].id == id && users[i].pin == pin && pinEnabled ){
                sender = users[i];
            }
       }  
       if(!sender){
          return res.json({msg : "wrong pin "});

       }

       if(balance > sender.balance){
        return  res.json({message : "insufficent money"});
       }

       for(let i =0; i<users.length ; i++){
           if(users[i].id == id ){
               users[i].balance = users[i].balance - balance;
           }
           if(users[i].id == recId){
            users[i].balance = users[i].balance + balance;
           }
       } 


       transactions.push({
        senderId  : id  ,
        recieverId : recId, 
        balance , 
        date : Date.now() , 

         
       })

       return res.json({message : "money transfered"});


    
 }




app.post("/transfer"  , moneytransfer);






            






// it should return something like bank statement 
// should must conatain - sender reciver balance senderId , reciverId ; 

app.post("/showhistory", (req, res)=>{
const {id} = req.id; 

 let tran = [];
 for(let i =0;i<transactions.length ; i++){
    if(transactions[i].senderId == id || transactions[i].recieverId){
        tran.push(transactions[i]);
    }
 }
  
 let sortedArr= tran.sort((a , b)=>{
    return (b.date - a.date);
 })

  




 


})



app.listen(3000);
