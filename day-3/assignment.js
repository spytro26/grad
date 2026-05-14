
const fs= require("fs");
function readFilePromisified(filePath){
    return new Promise(function (resolve,reject){
        fs.readFile(filePath, "utf-8",function(err,data){
        if(err){
            reject("err");
        }else{
            resolve(data);
        }
    
    });
});
}
setTimeout(() => {
    console.log("hi");
},);
function f1(data){
    console.log(data);
}
function f2(err){
    console.log("error");
}
async function yash(url){
    const a= await fetch(url); 
    console.log("inside the fxn");
    const b=  await a.json();
    console.log(b);

}
readFilePromisified("a.txt").then(f1).catch(f2)
yash("https://jsonplaceholder.typicode.com/users")
    setTimeout(() => {
            console.log("late");
        },2000 );