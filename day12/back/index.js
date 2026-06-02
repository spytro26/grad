import express from "express"
const app = express();
app.use(express.json());

 const  users = [] ;
 const loginedUsers = [];
 const transactionHistory = [];
  let a = 0 ; 
  
// {
//     id : 2,

//     "name" : "user "
//     username  : "any" , 
//     password : "nls" , 
//     balance : "jlsj"
// }

function getToken(){
    let arr = [ 1 , "a" , "b" , "s" , 2 , 3 , 4 , 6, 7, 8, 9 , "c" , "e"];
    let  token="";
    let size = arr.length -1     ;  
    for(let i = 0; i<20; i++){
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
// improvement add upi pin functionality 
app.get("/bal"  ,  (req , res)=>{
    // id password 
 
    const {id} = req.body;
    for(let i =0; i<users.length ; i++){
        if(id == users[i].id){
            return res.json({balance : users[i].balance});
        }
    }


  



    
})

// money transer user 1 - > 2 

// same improvment as /bal endpoint
 function moneytransfer(req , res){
    const {id , recId , balance} = req.body;
    if(!recId || balance === undefined){
        return res.status(400).json({message : "missing data"});
    }

    const amount = Number(balance);
    if(Number.isNaN(amount) || amount <= 0){
        return res.status(400).json({message : "invalid amount"});
    }

    let sender;
    let receiver;
    for(let i=0; i<users.length ; i++){
        if(users[i].id == id){
            sender = users[i];
        }
        if(users[i].id == recId){
            receiver = users[i];
        }
    }

    if(!sender || !receiver){
        return res.status(404).json({message : "user not found"});
    }

    if(amount > sender.balance){
        return  res.json({message : "insufficent money"});
    }

    sender.balance = sender.balance - amount;
    receiver.balance = receiver.balance + amount;

    transactionHistory.push({
        type: "transfer",
        senderId: sender.id,
        receiverId: receiver.id,
        amount,
        senderBalance: sender.balance,
        receiverBalance: receiver.balance,
        at: new Date().toISOString()
    });

    return res.json({message : "money transfered"});
 }




app.post("/transfer"  , moneytransfer);






            // assignment 





 // returns the user data like its name , username , etc
app.get("/userDetails"  , (req , res)=>{
    const {id} = req.body;
    const user = users.find((u) => u.id == id);
    if(!user){
        return res.status(404).json({message : "user not found"});
    }

    const {password, ...safeUser} = user;
    return res.json({user: safeUser});
})


// update the user Data like changing the username , name phone etc , 

app.post("/userDetails" , (req , res)=>{
    const {id , name , username , phone , password} = req.body;
    const user = users.find((u) => u.id == id);
    if(!user){
        return res.status(404).json({message : "user not found"});
    }

    if(username && username !== user.username){
        if(ispresent(username) == false){
            return res.status(401).json({message : "username already taken "});
        }
        user.username = username;
    }

    if(name){
        user.name = name;
    }

    if(phone){
        user.phone = phone;
    }

    if(password){
        if(password.length < 8){
            return res.status(400).json({message : "weak password"});
        }
        user.password = password;
    }

    const {password: hidden, ...safeUser} = user;
    return res.json({message : "user updated", user: safeUser});
})
// update the usesr balance with the credited money 
app.post("/creditmoney" , (req ,res)=>{
    const {id , balance} = req.body;
    const user = users.find((u) => u.id == id);
    if(!user){
        return res.status(404).json({message : "user not found"});
    }

    const amount = Number(balance);
    if(Number.isNaN(amount) || amount <= 0){
        return res.status(400).json({message : "invalid amount"});
    }

    user.balance = user.balance + amount;

    transactionHistory.push({
        type: "credit",
        senderId: null,
        receiverId: user.id,
        amount,
        senderBalance: null,
        receiverBalance: user.balance,
        at: new Date().toISOString()
    });

    return res.json({message : "money credited", balance: user.balance});
})

// atm withdrwaal 
app.post("/debitmoney" ,(req, res)=>{
    const {id , balance} = req.body;
    const user = users.find((u) => u.id == id);
    if(!user){
        return res.status(404).json({message : "user not found"});
    }

    const amount = Number(balance);
    if(Number.isNaN(amount) || amount <= 0){
        return res.status(400).json({message : "invalid amount"});
    }

    if(amount > user.balance){
        return  res.json({message : "insufficent money"});
    }

    user.balance = user.balance - amount;

    transactionHistory.push({
        type: "debit",
        senderId: user.id,
        receiverId: null,
        amount,
        senderBalance: user.balance,
        receiverBalance: null,
        at: new Date().toISOString()
    });

    return res.json({message : "money debited", balance: user.balance});
})

// it should return something like bank statement 
// should must conatain - sender reciver balance senderId , reciverId ; 

app.post("/showhistory", (req, res)=>{
    const {id} = req.body;
    if(!id){
        return res.status(400).json({message : "missing data"});
    }

    const user = users.find((u) => u.id == id);
    if(!user){
        return res.status(404).json({message : "user not found"});
    }

    const history = transactionHistory.filter((t) => t.senderId == id || t.receiverId == id);
    return res.json({history});
})



app.listen(3000);
