import { questoes } from "./questoes.js";

function salvarRespostas(numeroQuestao, respostaSelecionada) {
    const respostas = JSON.parse(sessionStorage.getItem("respostas")) || [];
    respostas[numeroQuestao - 1] = respostaSelecionada;
    sessionStorage.setItem("respostas", JSON.stringify(respostas));
}

function respostaCorreta(numeroQuestao) {
    const alternativas = questoes[0][String(numeroQuestao)];
    return Object.keys(alternativas).find((alternativa) => alternativas[alternativa]);
}

export function criarQuizPergunta(numeroQuestao, proximaPagina) {
    const opcoes = document.querySelectorAll(".opcao");
    const botaoProximo = document.querySelector(".btn-proximo");
    const botaoVoltar = document.querySelector(".btn-voltar");
    let respostaSelecionada = "";

    opcoes.forEach((opcao) => {
        opcao.addEventListener("click", () => {
            opcoes.forEach((item) => item.classList.remove("selecionada"));
            opcao.classList.add("selecionada");
            respostaSelecionada = opcao.textContent.trim();
        });
    });

    botaoProximo.addEventListener("click", (evento) => {
        evento.preventDefault();

        if (!respostaSelecionada) {
            alert("Selecione uma alternativa antes de continuar.");
            return;
        }

        salvarRespostas(numeroQuestao, respostaSelecionada);
        window.location.href = proximaPagina;
    });

    if (botaoVoltar) {
        botaoVoltar.addEventListener("click", (evento) => {
            evento.preventDefault();
            window.location.href = botaoVoltar.dataset.href || "../../index.html";
        });
    }
}

export function obterResultadoQuiz() {
    const respostas = JSON.parse(sessionStorage.getItem("respostas")) || [];
    const detalhes = respostas.map((resposta, indice) => {
        const numeroQuestao = indice + 1;
        const correta = respostaCorreta(numeroQuestao);

        return {
            numeroQuestao,
            respostaUsuario: resposta,
            respostaCorreta: correta,
            acertou: resposta === correta,
        };
    });

    return {
        acertos: detalhes.filter((item) => item.acertou).length,
        totalQuestoes: questoes[0] ? Object.keys(questoes[0]).length : 0,
        detalhes,
    };
}
