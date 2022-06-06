//optional arguments
function printIngredient(quantity:string,ingredient:string,extra?:string){
    console.log(`${quantity} ${ingredient} ${extra?`${extra}`:""}`);
}

printIngredient("1C","Flour");
printIngredient("1C","Flour","something more...");

//optional fields
interface User{
    id:string;
    info?:{
        email?:string;
    }
}

function getEmail(user:User){
    if(user.info){
        return user.info!.email;
    }
return "";
}

function getEmailEasy(user:User){
    return user?.info?.email??"";
}
// The nullish coalescing operator (??) 
// is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined, 
// and otherwise returns its left-hand side operand.
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

//optinal callbacks
function addWithCallback(x:number,y:number,callback:()=>void){
    console.log([x,y]);
    // if(callback){
    //     callback();
    // }
    //OR
    callback?.();

}
