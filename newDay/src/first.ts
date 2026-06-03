
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

