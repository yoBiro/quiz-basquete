import { obterResultadoQuiz } from "./quiz.js";

const resultadoPontuacao = document.querySelector("#resultado-pontuacao");
const resultadoMensagem = document.querySelector("#resultado-mensagem");
const resultadoLista = document.querySelector("#resultado-lista");
const botaoReiniciar = document.querySelector("#reiniciar-quiz");
const totalPerguntas = 6;

const respostas = JSON.parse(sessionStorage.getItem("respostas")) || [];

if (respostas.length < totalPerguntas) {
    window.location.href = "./pergunta1.html";
} else {
    const resultado = obterResultadoQuiz();

    sessionStorage.setItem("resultadoQuiz", JSON.stringify(resultado));

    const mensagemPorAcertos = {
        0: "Nem tente novamente lil bro 😭🥀🙏",
        1: "Nem tente novamente lil bro 😭🥀🙏",
        2: "Você vai ser um eterno rookie!",
        3: "Você vai ser um eterno rookie!",
        4: "Você pode ser considerado MVP 🏀",
        5: "Você pode ser considerado MVP 🏀",
        6: "Você é o GOAT 🐐",
    };

    resultadoPontuacao.textContent = `${resultado.acertos}/${resultado.totalQuestoes}`;
    resultadoMensagem.textContent =
        mensagemPorAcertos[resultado.acertos] || "Resultado concluído!";

    resultadoLista.innerHTML = resultado.detalhes
        .map((item) => {
            const classe = item.acertou ? "acertou" : "errou";
            const status = item.acertou ? "Correta" : "Incorreta";

            return `
                <div class="resultado-item ${classe}">
                    <strong>Questão ${item.numeroQuestao} - ${status}</strong>
                    <div>Resposta marcada: ${item.respostaUsuario || "Não respondida"}</div>
                    <div>Resposta correta: ${item.respostaCorreta}</div>
                </div>
            `;
        })
        .join("");

    botaoReiniciar.addEventListener("click", () => {
        sessionStorage.removeItem("respostas");
        sessionStorage.removeItem("resultadoQuiz");
        window.location.href = "./pergunta1.html";
    });
}
