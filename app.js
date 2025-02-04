let amigos = [];

function adicionarNome() {
  let input = document.getElementById("nome");
  let nome = input.value.trim();
  if (!nome) {
    alert("Por favor, insira um nome válido");
    return;
  }
  if (!amigos.includes(nome)) {
    amigos.push(nome);
    atualizarLista();
  }
  input.value = "";
  input.focus();
}

function atualizarLista() {
  let listaDiv = document.getElementById("lista-amigos");
  listaDiv.innerHTML = amigos.join("<br>");
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById(
      "resultado-sorteio"
    ).innerHTML = `O amigo secreto sorteado é: <b>${sorteado}</b>`;
  } else {
    document.getElementById("resultado-sorteio").innerHTML =
      "Adicione nomes antes de sortear!";
  }
}
