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
