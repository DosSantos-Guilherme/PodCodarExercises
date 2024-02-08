function calculateCircunference() {
  let radius = document.getElementById("radiusV").value
  let areaC = radius ** 2 * Math.PI
  let circC = 2 * Math.PI * radius
  let packsC = Math.round(circC / 20)
  document.getElementById("result").innerHTML =
    "Area = " +
    areaC +
    "<br>" +
    "Circunferência = " +
    circC +
    "<br>" +
    "Quantidade de arames=" +
    packsC
}
document.getElementById("radiusV").addEventListener("keydown", function (e) {
  if (e.code == "Enter") {
    calculateCircunference()
  }
})

function show_result() {
  let element = document.getElementById("solution1")

  if (element) {
    let display = element.style.display
    if (display == "none" || display == "") {
      element.style.display = "block"
      let show_button = document.getElementById("showResult")
      let hide_button = document.getElementById("hideResult")
      show_button.style.display = "none"
      hide_button.style.display = "block"
    }
  }
}

function hide_result() {
  let element = document.getElementById("solution1")
  if (element) {
    let display = element.style.display
    if (display == "block") {
      element.style.display = "none"
      let show_button = document.getElementById("showResult")
      let hide_button = document.getElementById("hideResult")
      show_button.style.display = "block"
      hide_button.style.display = "none"
    }
  }
}
