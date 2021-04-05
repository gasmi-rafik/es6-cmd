//let & const (constant)

function boucle() {
  for (var i = 0 ; i < 5 ; i++)
  {
    console.log("the number of iteration is " , i)
  }
   console.log("the number of iteration is " , i)
}
console.log(boucle())

// replace  var by let 

function boucl() {
  for (let i = 0 ; i < 5 ; i++)
  {
    console.log("the number of iteration is " , i)
  }
   console.log("the number of iteration is " , i)
}
console.log(boucl())
