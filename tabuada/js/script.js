const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", calcularTabuada);

function calcularTabuada() {
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");

  if (numero === "") {
    resultado.innerHTML = "<p>Por favor, digite um número.</p>";
    return;
  }

  let tabuada = "";

  for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} × ${i} = ${numero * i}<br>`;
  }

  resultado.innerHTML = tabuada;
}