let numbers = [1 , 5 , 3 , 4]

let x = numbers.reduce((acc , current) => acc + current , 0)
console.log(x)


let names =[{name : "rafik"},{name : "haroun"},{name : "hakim"}]


let z = names.reduce((acc , current) => acc + current.name , "")
console.log(z)