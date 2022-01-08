function pairOdd(num) {
  if (num % 2 == 0) {
    return 'Pair'
  } else {
    return 'Odd'
  }
}

let res = pairOdd(13)
console.log(`The number is ${res}`)

console.log(pairOdd(246))