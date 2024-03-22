const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-03-08T12:11:11");
const tempoObjetivo1 = new Date("2023-12-05T00:00:00");
const tempoObjetivo1 = new Date("2023-12-30T00:00:00");
const tempoObjetivo1 = new Date("2024-02-01T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo1){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(seegundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);
    return dias + " dias " + horas + " horas " + minutos + "minutos" + segundos + "segundos";
    } else {
        return "Prazo Finalizado;"
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

//comecaCronometro();