// setTimeout function with Promise
function waitingTime(){
    return new Promise(function(resolve,reject)
{setTimeout(()=>{
    console.log("Hello");
    resolve("success"); // Promise is resolves here
}, 5000 //prints Hello after 5 second
)


})
}
waitingTime();


//setTimeout function without promise

setTimeout(
    function(){
        console.log("Hello");
    },5000
)




//read file function
import fs from "fs";
function readMyFile(file){
    return new Promise(function(resolve,reject){
        fs.readFile(file,"utf-8",
            function(err, data){
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                    console.log(data);
                }
            }
        )
    })
}
readMyFile("read.txt");
// START readFile
// ↓
// Node reads file in background
// ↓
// Promise pending
// ↓
// If success → resolve(data)
// If fail → reject(err)



// fetch without promise
 async function fetchData(){
    
    const x=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const y= await x.json();
    console.log(y);


}
fetchData();


// fetch with promise
 function fetchData2(url){
    return new Promise (async function(resolve,reject){

    
    const x=await fetch(url);
    const y= await x.json();
    console.log(y);
    resolve(y);
 })

}
fetchData2("https://jsonplaceholder.typicode.com/todos/1");
