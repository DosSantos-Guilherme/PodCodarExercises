function calculateArea() {
  const PI = 3.141592
  let radius = document.getElementById("radiusV").value
  document.getElementById("result").innerHTML = radius ** 2 * Math.PI
}
document.getElementById("radiusV").addEventListener("keydown", function (e) {
  if (e.code == "Enter") {
    calculateArea()
  }
})
