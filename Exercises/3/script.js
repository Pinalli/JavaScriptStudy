

function count() {
  let start = document.getElementById("txts")
  let finish = document.getElementById("txtf")
  let step = document.getElementById("txtst")
  let res = document.getElementById("res")

  if (start.value.length == 0 || finish.value.length == 0 || step.value.length == 0) {
    res.innerHTML = `Impossible count<br> Missing data`


  } else {
    res.innerHTML = `Counting:`
    let s = Number(start.value)
    let f = Number(finish.value)
    let st = Number(step.value)

    if (st <= 0) {
      window.alert("Invalid Step")
    }

    if (s < f) {
      //count up
      for (let c = s; c <= f; c += st) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    } else {
      // count down
      for (let c = s; c >= f; c -= st) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }

}