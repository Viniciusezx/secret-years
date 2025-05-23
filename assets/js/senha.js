function verificar() {
  const valor = document.getElementById("entrada").value.toLowerCase();
  const validas = ["sol"];

  if (validas.includes(valor)) {
    window.location.href = "oxsqwkew.html";
  } else {
    alert("Palavra incorreta.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao");
  botao.addEventListener("click", verificar);
});

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao");
  const entrada = document.getElementById("entrada");

  botao.addEventListener("click", verificar);

  entrada.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      verificar();
    }
  });
});