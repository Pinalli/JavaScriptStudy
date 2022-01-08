function fatorialRecursive(num){
  if(num == 1){
    return 1
  }else{
    return num * fatorialRecursive(num-1)
  }
}
console.log(fatorialRecursive(5))