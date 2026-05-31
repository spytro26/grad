import fs from "fs";

// making readFile function promisified
function readFilePromisified(filePath){

    return new Promise(function(resolve, reject){

        fs.readFile(filePath, "utf-8", function(err, data){

            // if error comes
            if(err){
                reject(err);
            }

            // if file read successfully
            else{
                resolve(data);
            }

        });

    });

}


// simple setTimeout
setTimeout(() => {

    console.log("hi");

}, 1000);


// success function
function f1(data){

    console.log("file data is:");
    console.log(data);

}


// error function
function f2(err){

    console.log("error:", err);

}


// async function for fetch
async function yash(url){

    try{

        // fetching data
        const a = await fetch(url);

        console.log("inside the function");

        // converting into json
        const b = await a.json();

        // printing data
        console.log(b);

    }

    catch(err){

        console.log(err);

    }

}


// calling promisified file function
readFilePromisified("a.txt")
.then(f1)
.catch(f2);


// calling fetch function
yash("https://jsonplaceholder.typicode.com/users");


// another timeout
setTimeout(() => {

    console.log("late");

}, 2000);
