// object 
let user = {
    name : "rafik" ,
    age : 27
  }
  
  let a = {...user , id : 9 , name :"rafi9"} ;
  console.log(a)
  
  //array 
  const tab = [ 1 , 5 , 9 ] ;
  let b = [...tab , 3]
  console.log(b)

  const tab = [ 1 , 5 , 9 ] ;
let tab1 = [ 7 , 5 , 3]
let c = [...tab , ...tab1]
console.log(c)

const users = [{name : "rafik"} , {name : "mohamed"}] ;
const tab = [...users , {name: "karim"} ] ;
console.log(tab)


const users = [{name : "rafik"} , {name : "mohamed"}] ;
const tab = [...users , {name: "karim"} ] ;

const d =  users.map((el , i) =>{
  return {...el , age : i}
})
console.log(d)