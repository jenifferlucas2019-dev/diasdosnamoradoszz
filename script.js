// Data do início do namoro
const dataNamoro = new Date("2024-06-12T00:00:00");

// Contador
function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataNamoro;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Cartas
const cartas = {
    1: "❤️ Você é a melhor parte dos meus dias.",
    2: "🌹 Cada momento ao seu lado é especial.",
    3: "💕 Meu coração escolhe você todos os dias."
};

function abrirCarta(numero) {
    document.getElementById("textoCarta").textContent = cartas[numero];
    document.getElementById("popup").style.display = "block";
}

function fecharCarta() {
    document.getElementById("popup").style.display = "none";
}

// Música
window.addEventListener("click", () => {
    const musica = document.getElementById("musica");
    if (musica) {
        musica.play();
    }
}, { once: true });

// Corações caindo
function criarCoracao() {
    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";
    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.top = "-20px";
    coracao.style.fontSize = (Math.random() * 20 + 15) + "px";
    coracao.style.pointerEvents = "none";
    coracao.style.animation = "cair 5s linear forwards";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

setInterval(criarCoracao, 500);
