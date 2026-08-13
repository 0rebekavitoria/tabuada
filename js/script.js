const botao = document.getElementById("btnVerificar");
const inputIdade = document.getElementById("idade");

botao.addEventListener("click", verificarEntrada);
inputIdade.addEventListener("keypress", (e) => {
  if (e.key === "Enter") verificarEntrada();
});

function verificarEntrada() {
  const mensagem = document.getElementById("mensagem");

  const idade = Number(inputIdade.value);

  mensagem.className = "mensagem";

  if (inputIdade.value === "") {
    mensagem.textContent = "📝 Por favor, informe sua idade.";
    mensagem.classList.add("aviso");
  } else if (idade < 0 || idade > 120) {
    mensagem.textContent = "⚠️ Idade inválida. Digite um valor entre 0 e 120.";
    mensagem.classList.add("aviso");
  } else if (idade >= 18) {
    mensagem.textContent = "✅ Entrada liberada! Aproveite o evento!";
    mensagem.classList.add("liberado");
  } else {
    const anosRestantes = 18 - idade;
    mensagem.textContent = `❌ Entrada negada. Faltam ${anosRestantes} anos para entrar.`;
    mensagem.classList.add("negado");
  }

  inputIdade.focus();
}