// // synchrnoue and async 


// // 
// //promise - class  aync await 

// // (a , b )=>{
// //         a+b;
    
// // } , 

// // (a,b)=>  a+b

// // function 

// //  a++ == a = a+1;
// //  a+=2  , a = a +2; 



// function grad(url) {
//  return new Promise((resolve , reject )=>{
//     // fetch(url) work 
//     resolve();
// // in case of error 
//     reject();


//  })



// }


// grad("google.com");


import fs from "fs"

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}


function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

// readFilePromisified("a.txt").then(onDone).catch(onError);

 async function redfile(){
   const l = await   readFilePromisified("a.txt")
   console.log(l);

}
redfile();
console.log("b");


