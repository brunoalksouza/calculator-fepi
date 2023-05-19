function abreJanela() {
  alert(document.querySelector("h1").textContent);
}

const botoes = (document.querySelectorAll("input[type=button]").onclick =
  abreJanela);
