let values = [8, 7, 12, 4, 9]
console.log(values)
/*
for (var i = 0; i < values.length; i++){
  console.log(`Is position ${i} have the value ${values[i]}`)
}
*/

// for() more simple
for (let i in values) {
  console.log(`In the position ${i} have the value ${values[i]}`)
}

//find the value in position
let pos = values.indexOf(12)
if (pos == -1) {
  console.log(`Is position not found`)
} else {
  console.log(`The value this in positin ${pos}`)
}