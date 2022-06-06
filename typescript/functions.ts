function addNumbers(a:number,b:number):number{
    return a+b;
}
export default addNumbers;

export const addStrings=(str1:string,str2:string="abc"):string=>
`${str1} ${str2}`;

export const format=(title:string,param:string|number):string=>`${title} ${param}`

export const printFormat=(title:string,param:string|number):void=>{
    console.log(format(title,param));
}

//promise
export const fetchData=(url:string):Promise<string>=>Promise.resolve('data from fetch');

fetchData('any').then(v=>console.log(v));

//spread
function introduce(salutation:string,...names:string[]):string{
    return `${salutation} ${names.join(" ")}`
}

//typescript enforces types only at compile time not in runtime


export function getName(user:{first:string,last:string}):string{
    return `${user?.first} ${user?.last}`
}


export function printToFile(text:string,callback:()=>void):void{
    console.log(text);
    callback();
}

type MutationFunction=(v:number)=>number

const myNewMutationFunction:MutationFunction=(v:number)=>v*100;

export function arrayMutate(numbers:number[],mutate:MutationFunction):number[]{
    return numbers.map(mutate);
}
 console.log(arrayMutate([1,2,3],(v)=>v*10));


export function createAdder(num:number){
    return (val:number)=>num+val;
} 
const addOne=createAdder(1);
console.log(addOne(55))//56;

//FUNCTION OVERLOADING
interface Coordinate{
    x:number;
    y:number;
}

function parseCoordinateFromObject(obj:Coordinate):Coordinate{
    return{
        ...obj
    }
}
function parseCoordinateFromNumbers(x:number,y:number):Coordinate{
    return{
        x,y
    }
}

function parseCoordinate(obj:string):Coordinate;
function parseCoordinate(obj:Coordinate):Coordinate;
function parseCoordinate(x:number,y:number):Coordinate;
function parseCoordinate(arg1:unknown,arg2?:unknown):Coordinate{
    let coord:Coordinate={
        x:0,
        y:0
    }
     if(typeof arg1==='string'){
       (arg1 as string).split(",").forEach(str=>{
           const [key,value]=str.split(":");
           coord[key as "x"|"y"]=parseInt(value,10);
       })
    }
    else if(typeof arg1==='object'){
        coord={
            ...(arg1 as Coordinate)
        }
    }else{
        coord={
            x:arg1 as number,
            y:arg2 as number
        }
    }
    return coord;
}


console.log(parseCoordinate(10,20));
console.log(parseCoordinate({x:20,y:30}));
console.log(parseCoordinate("x:12,y:22"));