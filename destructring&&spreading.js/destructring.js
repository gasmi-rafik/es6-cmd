let introduction = ["hello " , "I" , "am" , "rafik"]
let greeting = introduction[0] ;
let name = introduction[3] ;

console.log(greeting) ;
console.log(name) ;
// declaring variables before assignment
let introduction = ["hello " , "I" , "am" , "rafik"]

let [greeting , pronoun , , x]= introduction  ;
console.log(greeting) ;
console.log(pronoun) ;
console.log(x) ;


//

let person = { name : "rafik" , country:"tunisia" , job:"developer"}
let {name , country , job} = person 

console.log(name)
console.log(country)
console.log(job)

//

let {name , country , job}  = { name : "rafik" , country:"tunisia" , job:"developer"}


console.log(name)
console.log(country)
console.log(job)

//

let user = {
    name : "rafik" ,
    age : 27 ,
    address :{
      city :"new york" ,
      cp:1400 ,
  
    }
  }
  let a = (person) => {
    return `my name is ${user.name} and my age is ${user.age} and i live in ${user.address.city}`
  }
  console.log(a(user))
  
  let b =({name , age , address :{city , cp} })=>{
   return `my name is ${name} and my age is ${age} and i live in ${city}`
  }
  
  console.log(b(user))

  //

  let tab = [1 , 2 , 3]
const [first , second , third] = tab ;

console.log(third)