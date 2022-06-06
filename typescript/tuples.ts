//A tuple is an array and each one in the array can have different name and different typwes.
//IN REACT USESTATE HOOK IS COMMON TUPLE

type ThreeDCoordinate=[x:number,y:number,z:number];

function add3DCoordinate(c1:ThreeDCoordinate,c2:ThreeDCoordinate):ThreeDCoordinate{
    return [
        c1[0]+c2[0],
        c1[1]+c2[1],
        c1[2]+c2[2],
    ]
}
console.log(add3DCoordinate([1,0,0],[10,20,30]));

function simpleStringState1(initial:string):[()=>string,(v:string)=>void]{
    let str:string=initial;
    return[
        ()=>str,
        (v:string)=>{
            str=v;
        }
    ]
}
const [str1getter,str1setter]=simpleStringState1("hello");
console.log(str1getter());
str1setter("goodbye");
console.log(str1getter())