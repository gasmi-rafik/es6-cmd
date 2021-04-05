// if lse 
let age = 18 ;
let test = n =>{
if (n < 18){
return "child "
}
else 
return "old"
}
console.log(test(age))
const test1 = (n) =>  n < 18 ? "child" : "old"

// if else 
let age = 0 ;
let test = n =>{
if (n > 35){
return "old "
}
else if(n >18)
{
return "young"
}
else 
return "child"
}
console.log(test(age))
const test1 = (n) =>  n > 35 ? "old" : n > 18 ? "young" : "child"