import { obterResultadoQuiz } from "./quiz.js";

const mensagensResultado = {
    0: "Nem tente novamente lil bro 😭🥀🙏",
    1: "Nem tente novamente lil bro 😭🥀🙏",
    2: "Você vai ser um eterno rookie!",
    3: "Você vai ser um eterno rookie!",
    4: "Você pode ser considerado MVP 🏀⛹️",
    5: "Você pode ser considerado MVP 🏀⛹️",
    6: "Você é o GOAT 🐐",
};

export function obterMensagemResultado() {
    const resultado = obterResultadoQuiz();

    return mensagensResultado[resultado.acertos] || "Resultado concluído!";
}


