import { questoes } from "./questoes.js";

// iniciando dados
let indexAtual = 0;
let respostaCorretas = 0;
let progresso = 0;

// Finções

function iniciaQuiz() {
  if (questoes[indexAtual]) {
    let q = questoes[indexAtual]; // pega o primeiro objeto do array

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
  }
}

iniciaQuiz();
