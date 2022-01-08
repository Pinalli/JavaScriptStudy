function tocheck() {
  var date = new Date()
  var year = date.getFullYear()
  var formYear = document.getElementById("txtyear")
  var res = document.querySelector("div#res")

  if (formYear.value.length == 0 || Number(formYear.value) > year) {
    window.alert("[ERROR] Verify the data e try again")
  } else {
    var formSex = document.getElementsByName("radsex")
    var age = year - Number(formYear.value)
    var gender = ""
    var img = document.createElement("img")
    img.setAttribute("id", "photo")

    if (formSex[0].checked) {
      gender = "Man"
      if (age >= 0 && age < 10) {
        img.setAttribute("src", "photo-manchild.png")
      } else if (age < 21) {
        img.setAttribute("src", "photo-youngman.png")
      } else if (age < 50) {
        img.setAttribute("src", "photo-adultman.png")
      } else {
        img.setAttribute("src", "photo-oldman.png")
      }
    }
    else if (formSex[1].checked) {
      gender = "Woman"
      if (age >= 0 && age < 10) {
        img.setAttribute("src", "photo-womanchild.png")
      } else if (age < 21) {
        img.setAttribute("src", "photo-youngwoman.png")
      } else if (age < 50) {
        img.setAttribute("src", "photo-adultwoman.png")
      } else {
        img.setAttribute("src", "photo-oldman.png")
      }
      res.style.textAlign = "center"
      res.innerHTML = `We detect: ${gender} with ${age} age.`
      res.appendChild(img)
    }
  }
}
