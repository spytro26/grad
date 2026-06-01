import fs from "fs";

// making readFile function promisified
function readFilePromisified(filePath){

    return new Promise((resolve, reject) =>{

        fs.readFile(filePath, "utf-8", (err, data) => {

            // if error comes
            if(err){
                reject("Error while reading file");
            }

            // if file read successfully
            else{
                resolve(data);
            }

        });

    });

}

// function for success
function success(data){
    console.log("file data is: " + data);
}

// function for error
function error(err){
    console.log("Error is: " + err);
}

//SetTimeout function with promise
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
//usage with .then()
delay(2000).then(() => console.log("Executed after 2 seconds"));

//usage with async/await
async function run(){
    console.log("Waiting...");
    await delay(3000);
    console.log("Executed after 3 seconds");
}


// async function for fetch
async function AK(url){
        // waiting for fetch data
        const a = await fetch(url);
        console.log("inside the function");
        // converting response into json
        const b = await a.json();
        // printing data
        console.log(b);

}

// calling promisified file function
readFilePromisified("task.txt").then(success).catch(error);


// calling fetch function
AK("https://jsonplaceholder.typicode.com/todos/1");


run();  // calling delay function