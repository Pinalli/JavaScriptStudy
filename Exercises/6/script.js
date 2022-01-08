let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}
function finish() {
  if (values.length == 0) {
    window.alert('Please, add a number before finish')
  } else {
    let total = values.length
    let major = values[0]
    let minor = values[0]
    let sum = 0
    let average = 0
    for (let i in values) {
      sum += values[i]
      if (values[i] > major) {
        major = values[i]
      }
      if (values[i] < minor) {
        minor = values[i]
      }
    }
    average = sum / total
    res.innerHTML = ""
    res.innerHTML += `<p> In all, we have ${total} registered numbers </p>`
    res.innerHTML += `<p> The major value informed were ${major}</p>`
    res.innerHTML += `<p> The minor value informed were ${minor}</p>`
    res.innerHTML += `<p> The sum of the values is ${sum}</p>`
    res.innerHTML += `<p> The average of the values typed is ${average}</p>`


  }
}
function add() {
  if (isNumber(num.value) && !inList(num.value, values)) {
    values.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Value ${num.value} add`
    list.appendChild(item)
    res.innerHTML = ""
  } else {
    window.alert("Invalid value or already on the list")
  }
  num.value = ""
  num.focus()
}