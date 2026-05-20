import fs from "fs";

// promisified version of readFile
function readFilePromisified(filePath){
    return new Promise((resolve,reject) => {
        fs.readFile(filePath,"utf-8",(err,data) => {
            if(err){
                reject("Error: " + err);
            }else{
                resolve(data);
            }
        });
    });
}

// promisified version of setTimeout
function setTimeoutPromisified(ms){
    return new Promise((resolve) => {
        setTimeout(resolve,ms);
    });
}

// async function for fetch
async function getData(url){
    const response = await fetch(url);
    // converting to json
    const data = await response.json();
    console.log(data);
}

// calling readFile
readFilePromisified("a.txt")
.then((data) => {
    console.log("file content: " + data);
})
.catch((err) => {
    console.log(err);
});

// calling setTimeout
setTimeoutPromisified(2000).then(() => {
    console.log("done after 2 seconds");
});

// calling fetch
getData("https://jsonplaceholder.typicode.com/todos/1");