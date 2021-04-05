let name = "rafik"
let age = 27
let address = {
  city : "new york " , 
  cp : 1080 ,
};
 let string = 
 "my name is " + name + " and my age is " +age+ " and i live in " +address.city+ +address.cp

 console.log(string)
 let string1 = `my name is ${name} and my age is ${age} and i live in ${address.city} ${address.cp}`
 console.log(string1)