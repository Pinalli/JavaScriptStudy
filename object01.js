let friend = {
  name: 'Alberto',
  sex: 'Man',
  weight: '86.4',
  fatten(w = 0) {
    console.log('Fed up')
    this.weight += w
  }
}
//console.log(typeof friend)
friend.fatten(7)
console.log(`${friend.name} weighs ${friend.weight} Kg`)