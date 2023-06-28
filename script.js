// ########## Variáveis ##########
let numero = document.querySelector('.numero');

let digito1 = document.querySelector('#digito1');
let digito2 = document.querySelector('#digito2');

let telaInicial = document.querySelector('.telainicial');
let cliqueBranco = document.querySelector('.cliquebranco');
let cliqueConfirma = document.querySelector('.cliqueconfirma');
let invalido = document.querySelector('.invalido');

let votoBranco = false;
let votoInvalido = false;
let fim = false;

let beep = new Audio('sounds/beep.mp3');
let music = new Audio('sounds/votacao-finalizada.mp3');

digito1.style.animation = '';
digito2.style.animation = 'none';

let candidatos = document.querySelector('.candidatos');
let candidato1 = `<div class="num-candidato">
<span>SEU VOTO PARA</span>
<p><strong>PRESIDENTE</strong></p>
<input type="text" name="digitado" value="2" id="digitado1" maxlength="1" readonly>
<input type="text" name="digitado" value="2" id="digitado2" maxlength="1" readonly>
</div>

<div class="text-candidato">
<p><strong>Nome: </strong>Cristiano Ronaldo</p>
<p><strong>Partido: </strong>Lendas</p>
<p><strong>Slogan: </strong>Gol</p>
<p><strong>Vice-Presidente: </strong>Lionel Messi</p>
</div>
<div>
<img class="foto-candidato" src="Candidatos/1/10001874.jpg" alt="Presidente">
<img class="foto-vice"  src="Candidatos/1/Lionel Andrés Messi.png" alt="Vice">
</div>`
let candidato2 = `<div class="num-candidato">
<span>SEU VOTO PARA</span>
<p><strong>PRESIDENTE</strong></p>
<input type="text" name="digitado" value="1" id="digitado1" maxlength="1" readonly>
<input type="text" name="digitado" value="3" id="digitado2" maxlength="1" readonly>
</div>

<div class="text-candidato">
<p><strong>Nome: </strong>Neymar Jr</p>
<p><strong>Partido: </strong>Golaço</p>
<p><strong>Slogan: </strong>Habilidade</p>
<p><strong>Vice-Presidente: </strong>Mbappe</p>
</div>
<div>
<img class="foto-candidato" src="C:\Users\User\Documents\WebDev-Arthur\UrnaEletronica\Candidatos\3\neymar.jpg" alt="Presidente">
<img class="foto-vice"  src="C:\Users\User\Documents\WebDev-Arthur\UrnaEletronica\Candidatos\3\mbappe.png" alt="Vice">
</div>`
let candidato3 = `<div class="num-candidato">
<span>SEU VOTO PARA</span>
<p><strong>PRESIDENTE</strong></p>
<input type="text" name="digitado" value="1" id="digitado1" maxlength="1" readonly>
<input type="text" name="digitado" value="4" id="digitado2" maxlength="1" readonly>
</div>

<div class="text-candidato">
<p><strong>Nome: </strong>Benzema</p>
<p><strong>Partido: </strong>Real Madrid</p>
<p><strong>Slogan: </strong>Campeões</p>
<p><strong>Vice-Presidente: </strong>Vinicius Jr</p>
</div>
<div>
<img class="foto-candidato" src="Candidatos\2\benzema.png" alt="Presidente">
<img class="foto-vice"  src="Candidatos\2\vinicius junior.png">
</div>`

// Funções dos botões 
function digitar(numero) {
    beep.play();

    if(fim === false && votoBranco === false) {
        if(digito1.value == "" && digito2.value == "") {
            digito1.value = numero;
            digito1.style.animation = 'none';
            digito2.style.animation = '';
        }
        else if(digito1.value != "" && digito2.value == "") {
            digito2.value = numero;
            digito1.style.animation = 'none';
        }
    }
}

function branco() {
    beep.play();

    if(fim === false) {
        if(digito1.value == "" && digito2.value == "") {
            votoBranco = true;
            telaInicial.classList.add('sumir');
            cliqueBranco.classList.remove('sumir');
        }
    }
}

function corrige() {
    beep.play();

    if(fim === false) {
        telaInicial.classList.remove('sumir');
        cliqueBranco.classList.add('sumir');
        invalido.classList.add('sumir');
        candidatos.classList.add('sumir');
        digito1.value = "";
        digito2.value = "";
        votoBranco = false;
        votoInvalido = false;
    }
}

//Votando
const loop = setInterval() => {
    if(digito1.value == "2" && digito2.value == "2") {
        telaInicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato1;
    }else if(digito1.value == "1" && digito2.value == "3") {
        telaInicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato1;
    }else if(digito1.value == "1" && digito2.value == "4") {
        telaInicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato1;
}