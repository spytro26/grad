
// basic types
let Digit : number = 2;
let username : string = "ankush";
let isPresent : boolean = false;
let anything : any ; 
let user : null;


// complex types
let arr : number [] = [ 1, 34, ];
// 


function execute(fn : (name  : string ) => number ,  naame : string  ) : void {
    fn(naame);


}

function greet(name : string ) : number {
    console.log( "hello " + name);
        return 0 ; 


}

execute(greet , "ankush")


// object

type ranndomType = {
    name : string , 
    section : string , 
    phone : number ,
    username : string 
}



interface rn  {
    name : string ,
    section ? : string , 
    username : string 
}

function Anything(random : rn  ){
    console.log(random.name);
    console.log(random.username);
    console.log(random.section);
}




let ank = {
    name : "ankush",
    username : "ayush"
}

Anything(ank)





// Ecommmerce
// pending , shipped , delivered , cancelled




enum orderEnum {
   pending  ="pending",
   shipped ="shipped", 
   deliverd ="delivered", 
   cancelled = "cancelled" 
}


type orderType = {
    id : number ,
    name : string ,
    price : number , 
    status : orderEnum

}



 let order : orderType = {
    id : 1 , 
    name : "laptop" , 
    price : 3000,
    status : orderEnum.pending
 }

// 


// generics



function returnLargest<Type>(a : Type   , b : Type ) : Type {
if(a>b) return a  ; 
return b; 
}


returnLargest<number>(1 ,2);
returnLargest<string> ('a', 'c');



// largest elemen in an array ? 
// character 
// number
