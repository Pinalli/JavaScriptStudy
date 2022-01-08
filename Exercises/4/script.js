function generate() {
  let num = document.getElementById("txtn")
  let tab = document.getElementById("seltable")
  if (num.value.length == 0) {
    window.alert("Please, type it a number")
  } else {
    let n = Number(num.value)
    let count = 1
    //clear table
    tab.innerHTML = ""
    while (count <= 10) {
      let item = document.createElement("option")
      item.text = `${n} x ${count} = ${n * count}`
      item.value = `tab ${count}`
      tab.appendChild(item)
      count++
    }
  }
}
