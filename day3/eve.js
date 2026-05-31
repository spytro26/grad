// querySelector
// querySelectorAll
// getElementById
// getElementByClassName
// getElementsByClassName



 async function ankush (url){

    const a =  await  fetch(url); // NODE 
        console.log("inside the ankush function ");
     const b = await  a.json();

    // console.log(a);
    console.log(b);
    


} 

class stud {
    constructor(name , roll , age ){
        this.name =  name , 
        this.roll = roll, 
        this.age = age

    }
}


 let obj = {
    name : "ankush ", 
    roll : "803",
    age : 30
}

// 


 
let obj2 = new stud("ayush" , "30" , 32);



 ankush("https://jsonplaceholder.typicode.com/todos/1");
 console.log("outside the ankush function ");

querySelector
querySelectorAll
getElementById
getElementByClassName
getElementsByClassName
