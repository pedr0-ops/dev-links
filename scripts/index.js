function changeMode() {
  const body = document.getElementsByTagName("body")[0]
  console.log("BODY", body)
  if (body.classList.contains("dark")) {
    document.querySelector("#button_mood_image").src = "./assets/sun.svg"
    document.querySelector("body").classList.remove("dark")
    document.querySelector("body").classList.add("ligth")
  } else {
    document.querySelector("#button_mood_image").src = "./assets/moon-stars.svg"
    document.querySelector("body").classList.remove("ligth")
    document.querySelector("body").classList.add("dark")
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var meuBotao = document.getElementsByTagName("button")[0]
  meuBotao.addEventListener("click", changeMode)
})
