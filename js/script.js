
const pageHome = document.querySelector('.home');
const pageLuck = document.querySelector('.luck');

const openBiscuit = document.querySelector(".js-open");
const callBackHome = document.querySelector('#callback');

let luckIndex = Math.round(Math.random() * 4);
openBiscuit.addEventListener('click', callLuckHome);
callBackHome.addEventListener('click',callLuckHome);



const luckyMessages = [
    "O sucesso está logo à frente. Acredite em si mesmo e siga em frente.",
    "A vida é uma jornada. Aproveite cada passo no caminho.",
    "A paciência é uma virtude. Grandes coisas acontecem para aqueles que esperam.",
    "A felicidade está nas pequenas coisas. Valorize os momentos simples da vida.",
    "A criatividade está dentro de você. Deixe sua imaginação voar alto.",
]


function callLuckHome(event){
    event.preventDefault();

    document
    .querySelector('.luck-message p')
    .innerText = luckyMessages[luckIndex];

    pageHome.classList.toggle('hide');
    pageLuck.classList.toggle('hide');

    luckIndex = Math.round(Math.random() * 4);
}
