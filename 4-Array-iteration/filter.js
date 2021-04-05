let numbers = [1 , 5 , 3 , 4]

let x = numbers.filter((el , i) => { return  i % 2 })
console.log(x)


let y = numbers.filter((el) => { return  !(el % 2) })
console.log(y)

let names =[{name : "rafik"},{name : "haroun"},{name : "hakim"}]


let z = names.filter((el) => el.name.length <= 5)
console.log(z)