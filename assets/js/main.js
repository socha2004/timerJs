function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    })
}

const relogio = document.querySelector(".timer");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0

function iniciaRelogio() {
    const timer = setInterval(function () {
        segundos += 1;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

iniciar.addEventListener("click", function (evento) {
    iniciaRelogio();
});
pausar.addEventListener("click", function (evento) {
    iniciaRelogio();
});
zerar.addEventListener("click", function (evento) {
    window.alert("Botão clicado!");
});
