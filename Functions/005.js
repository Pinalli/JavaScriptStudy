function fatorial(number) {
  let fat = 1
  for (let i = number; i > 1; i--) {
      fat *= i
  } 
   return fat
}
console.log(fatorial(4))