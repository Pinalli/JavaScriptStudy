console.log("Lists\n")

const ListCity = new Array(

  `Salvador`,
  `Porto Alegre`,
  `Paris`,
  `Londres`,
  `Buenos Aires`
)

ListCity.push(`Natal`)//add

console.log("Possible Destinations\n")
console.log(ListCity)

ListCity.splice(5, 1)//remove (position, amount)
console.log(ListCity)
console.log(ListCity[0], ListCity[4], ListCity[1]) //specific element