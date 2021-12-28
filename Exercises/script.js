function load() {
  var msg = window.document.getElementById("msg")
  var img = window.document.getElementById("imagem")
  var data = new Date()
  //var hour = data.getHours()
  var hour = 19
  msg.innerHTML = `Now is ${hour} hours`

  if (hour >= 0 && hour < 12) {
    img.src = "manha.png"
    document.body.style.background = '#deB887'
  } else if (hour >= 12 && hour <= 18) {
    img.src = "tarde.png"
    document.body.style.background = '#d18877'
  } else {
    img.src = "noite.png"
    document.body.style.background = '#13213c'
  }
}