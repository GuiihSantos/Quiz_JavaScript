import { questoes } from "./questoes.js";

// iniciando dados
let indexAtual = 0;
let respostaCorretas = 0;
let progresso = 0;

// Finções

function iniciaQuiz() {
  if (questoes[indexAtual]) {
    let q = questoes[indexAtual]; // pega o primeiro objeto do array

    document.querySelector(".container-pergunta").style.display = "block";
    document.querySelector(".container-final-jogo").style.display = "none";

    document.querySelector(".pergunta").innerHTML = q.questao;

    document.querySelector(".contagem").innerHTML = `${indexAtual + 1} / ${
      questoes.length
    }`;

    let opcoesHTML = "";
    for (let i in q.opcoes) {
      opcoesHTML += `
        <div data-op="${i}" class="opcao">${q.opcoes[i]}</div>
    `;
    }

    document.querySelector(".opcoes").innerHTML = opcoesHTML;

    document.querySelector(".opcoes ").addEventListener("click", respostaCerta);
  } else {
    finalizaQuiz();
  }
}

function respostaCerta(e) {
  const respostaUsuario = parseInt(e.target.getAttribute("data-op"));
  if (questoes[indexAtual].resposta === respostaUsuario) {
    respostaCorretas++;
  }

  indexAtual++;
  progresso++;
  iniciaQuiz();
}

function finalizaQuiz() {
  const porcentagem = Math.floor((respostaCorretas / questoes.length) * 100);

  document.querySelector(".container-pergunta").style.display = "none";
  document.querySelector(".container-final-jogo").style.display = "block";

  msgPersonalizada(porcentagem);

  document.getElementById("Quantidade-resultado").innerText = respostaCorretas;
  document.getElementById("porcetagem-resultado").innerText = `${porcentagem}%`;

  document
    .querySelector(".recomeca-jogo")
    .addEventListener("click", recomecaJogo);
}

function recomecaJogo() {
  indexAtual = 0;
  progresso = 0;
  respostaCorretas = 0;
  iniciaQuiz();
}

function msgPersonalizada(quantidadeAcertada) {
  const msgResultado = document.querySelector(".msg-resultado");

  if (quantidadeAcertada < 30) {
    msgResultado.innerHTML = "Ishii tá ruim em 🤣";
    msgResultado.style.color = "red";
  } else if (quantidadeAcertada >= 30 && quantidadeAcertada < 70) {
    msgResultado.innerHTML = "muito bom 🙂";
    msgResultado.style.color = "#406b45";
  } else {
    msgResultado.innerHTML = "PARABÉNSSS 🥳🎉";
    msgResultado.style.color = "#59ff00";
  }
}

iniciaQuiz();
