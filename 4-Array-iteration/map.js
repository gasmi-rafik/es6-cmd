let names = ["rafik" , "haroun" , "hakim"]

let x = names.map((el) => { return  el.toUpperCase()})
console.log(x)


//******************************** */
let numbers = [1 , 2 , 3]

let x = numbers.map((el) => { return  el +1})
console.log(x)
let y = numbers.map((el ) => { return  { num : el}})
console.log(y)

let z = numbers.map((el , i) => { return i %  2 ? { num : el} : el })
console.log(z)

let a = numbers.map((el , i) => { return !(i %  2 )? { num : el} : el })
console.log(a)
