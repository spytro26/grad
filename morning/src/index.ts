import express from "express";
const app  =  express();
import bcrypt from "bcrypt"
import * as z from "zod";
import type { Request, Response } from "express";
app.use(express.json());



app.post("/signup" ,  async (req : Request, res : Response)  : Promise<any> =>{
    const {name , username , password , number} = req.body;
  
    
    const signupValidation  = z.object({
  name: z.string().max(100 , "name too long ").min(3 , "name too short"),
   username : z.string().max(8, "username too long "), 
   phone : z.number().max(10),
   password : z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , "passworad tooo weak")
});


let a = signupValidation.safeParse(req.body).success;
 if(!a){
    return res.json({message : "invalid input type "});

 }

 // username 
// phone 

  const hashedPassword = await bcrypt.hash(password , 5)


 // prisma.user.create({
 // data : {
 //  name : name, 
 //  usrename , 
 // passwrod  : hashedPasswrod , 

 //}
 //})

 return res.json({message  : "user created suceffully"});



    

})

app.post("/signin" ,  async (req : Request , res : Response ) : Promise<any> =>{
    const {username , password} = req.body;
    // to - do verify this with zod
        
    //  const userData  =    prisma.users.findFirst({
    //         where : {
    //             username : username 
    //         }
    //     })


                                                    // userData.password
         let a = await bcrypt.compare(password ,"$2b$05$h1bK8TSzBVzo2TRNRH0Ga.MiCY4mwQ6WvvRkpNa6ftGUctvkZBlki" )
   if(!a){
    return res.json({message : "wrong password"});
   }
    // create a token with the jwt 

    return res.json({message : "return the created token "});




})


