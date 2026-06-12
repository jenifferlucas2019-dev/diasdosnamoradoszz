// DATA QUE VOCÊS COMEÇARAM A NAMORAR
const dataNamoro = new Date("2024-01-01 00:00:00");

// CONTADOR DE TEMPO JUNTOS
function atualizarTempo() {
    const agora = new Date();
    const diferenca = agora - dataNamoro;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("tempo").innerHTML =
        `${dias} dias 💖 ${horas} horas 💕 ${minutos} minutos ❤️ ${segundos} segundos`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();

// CARTAS DE AMOR
const cartas = {
    1: `
    💌 Meu Amor,

    Você é a melhor parte dos meus dias.
    Obrigada por cada sorriso, abraço e momento especial.
    Eu te amo muito! ❤️
    `,

    2: `
    💖 Amor,

    Desde que você chegou, minha vida ficou mais bonita.
    Que nosso amor cresça a cada dia. ✨
    `,

    3: `
    💘 Meu Bem,

    Não importa a distância ou o tempo,
    meu coração sempre será seu.
    Te amo infinitamente! ❤️
    `
};

function abrirCarta(numero) {
    const textoCarta = document.getElementById("textoCarta");

    textoCarta.innerHTML = cartas[numero];
    textoCarta.style.display = "block";

    textoCarta.scrollIntoView({
        behavior: "smooth"
    });
}

// CHUVA DE CORAÇÕES
function criarCoracao() {
    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";
    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.top = "-20px";
    coracao.style.fontSize = (Math.random() * 20 + 20) + "px";
    coracao.style.pointerEvents = "none";
    coracao.style.zIndex = "999";

    document.body.appendChild(coracao);

    let posicao = 0;

    const queda = setInterval(() => {
        posicao += 4;

        coracao.style.top = posicao + "px";

        if (posicao > window.innerHeight) {
            clearInterval(queda);
            coracao.remove();
        }
    }, 30);
}

setInterval(criarCoracao, 400);

// MENSAGEM DE BOAS-VINDAS
window.onload = () => {
    setTimeout(() => {
        alert("❤️ Feliz Dia dos Namorados! ❤️");
    }, 1000);
};