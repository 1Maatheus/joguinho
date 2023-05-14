function mudarPosicao() {
  let elemento = document.getElementById("elemento");
  let novaPosicaoTop = Math.random() * window.innerHeight;
  let novaPosicaoLeft = Math.random() * window.innerWidth;

  elemento.style.top = novaPosicaoTop + "px";
  elemento.style.left = novaPosicaoLeft + "px";
}

const button = document.getElementById("yes");
const div = document.getElementById("text");

button.addEventListener("click", function () {
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
});

const btn = document.getElementById("out");

btn.addEventListener("click", function () {
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
});
