
// event loop
// call stack 
// web api  /// os , netwrok , i.0 
// call back queue 





import fs from "fs"

// let sum =0; 
// for(let i =0; i<100000003;i++){ // cpu bound 5s 
//     // sum++;
//     // sum = sum+1;
//     sum+=1;


// }

function print(error , data){
    console.log(data);


}

    
function grad () {
    const data = fs.readFile("a.txt", "utf-8" , print); // js 
    // console.log(data);
    console.log("random");


}

console.log("a")
grad();

console.log("b");




// function print(d ){
//     console.log("sum of the number is "  , d);
// }


// function  sum  (a , b , c ){
//     // work 
//     c(a+b);


// }


// sum(1 , 2 ,print );


