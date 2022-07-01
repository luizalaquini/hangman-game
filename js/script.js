const words = {
    Fruta: ['melancia', 'jaca', 'jabuticaba', 'amora', 'caqui', 'cereja', 'framboesa', 'jambo', 'pitaya', 'roma', 'carambola', 'guarana', 'damasco', 'manga', 'pessego', 'abacaxi', 'açai', 'acerola', 'pitanga', 'cacau', 'caja', 'cidra', 'cupuaçu', 'figo', 'goiaba', 'groselha', 'inga', 'jenipapo', 'maracuja', 'pequi', 'pupunha', 'siriguela', 'tamarindo'],
    País: [ 'italia', 'moçambique', 'suiça', 'equador', 'peru', 'paraguai', 'ucrania', 'romenia', 'bulgaria', 'costa rica', 'inglaterra', 'nigeria', 'gana', 'marrocos', 'senegal', 'etiopia', 'uganda', 'madagascar', 'jamaica', 'camaroes', 'angola', 'tailandia', 'islandia', 'cabo verde', 'costa do marfim', 'nova zelandia', 'venezuela', 'arabia saudita', 'argelia', 'argentina', 'austria', 'bahamas', 'bolivia', 'brasil', 'camboja', 'china', 'colombia', 'coreia do norte', 'croacia', 'cuba', 'dinamarca', 'egito', 'filipinas', 'georgia', 'frança', 'grecia', 'guatemala', 'haiti', 'honduras', 'hungria', 'indonesia', 'india', 'iraque', 'irlanda', 'jordania', 'libano', 'luxemburgo', 'malasia', 'mexico', 'nepal', 'panama', 'taiwan', 'siria', 'vietna'],
    Animal: [ 'gato', 'cachorro', 'leão', 'tigre', 'macaco', 'cavalo', 'cobra', 'tartaruga', 'jacaré', 'girafa', 'lobo', 'anta', 'jaguar', 'puma', 'javali', 'esperança', 'barata', 'grilo', 'girino', 'camelo', 'jabuti', 'louva-deus', 'abelha', 'andorinha', 'babuino', 'baleia', 'camaleao', 'dragao-de-komodo', 'dromedario', 'ema', 'foca', 'flamingo', 'golfinho', 'guaxinim', 'hiena', 'hipopotamo', 'coala', 'pinguim', 'tamandua', 'onça', 'tatu', 'mico-leao-dourado', 'sagui', 'raposa', 'corvo', 'avestruz', 'coelho', 'ovelha', 'tucano', 'zebra'],
    Personagem: ['pernalonga', 'patolino', 'piu-piu', 'frajola', 'tom', 'jerry', 'shrek', "fiona", "encantado", 'pica-pau', 'zeca urubu', 'leoncio', 'ze colmeia', 'catatau', 'bob esponja', 'patrick', 'lula molusco', 'sandy bochechas', 'sr sirigueijo', 'plankton', 'sra puff', 'gary', 'nemo', 'dory', 'aladdin', 'abu', 'jasmine', 'jafar', 'cinderela', 'branca de neve', 'pinoquio', 'pluto', 'pato donald', 'mickey', 'pateta', 'kronk', 'cruella', 'woody', 'buzz lightyear', 'pooh', 'gato de botas', 'sr incrivel', 'mulher elastica', 'ariel', 'homem de ferro', 'homem-aranha', 'batman', 'viuva-negra', 'super-homem', 'pocahontas', 'malevola', 'edna moda', 'peter pan', 'sininho', 'capitao gancho', 'simba', 'timao', 'pumba'],
    Objeto: ['guarda-chuva', 'carteira', 'caneta', 'carregador', 'celular', 'notebook', 'caderno', 'bicicleta', 'livro', 'travesseiro', 'panela', 'garfo', 'faca', 'colher', 'luminaria', 'envelope', 'escorredor', 'echarpe', 'agulha', 'seringa', 'algema', 'anzol', 'aspirador', 'arco', 'aro', 'balde', 'bambole', 'bumerangue', 'calice', 'campainha', 'candelabro', 'canivete', 'delineador', 'drone', 'dobradiça', 'esponja', 'extintor', 'foice', 'frasco', 'grampo', 'gravata', 'guirlanda', 'haste', 'holofote', 'isqueiro', 'joelheira', 'jaleco', 'microfone', 'megafone']
}

const category = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];

const secretWord = words[category][Math.floor(Math.random() * words[category].length)];

const rightLetters = [];
const wrongLetters = [];

document.addEventListener("keypress", (event) => {
    const entry = event.key;
    if (isEnter(entry)){ /*do nothing*/ }
    else if (isLetter(entry)) {
        const letter = event.key.toLowerCase();
        if (wrongLetters.includes(letter) || rightLetters.includes(letter)) {
            showWarningRepeatedLetter();
        } else {
            if (secretWord.includes(letter)) {
                rightLetters.push(letter);
            } else {
                wrongLetters.push(letter);
            }
        }
        updateGame();
    }
});

function updateGame() {
    showWrongLetters();
    showRightLetters();
    showCategory();
    drawHangman();
    checkGameStatus();
}

function showCategory() {
    const div = document.querySelector('.category');
    div.innerHTML = `<h2>Categoria: ${category}</h2>`;
}

function showWrongLetters() {
    const div = document.querySelector(".wrong-letters");
    div.innerHTML = "<h4>Letras Erradas:</h4>";
    wrongLetters.forEach((letter) => {
        div.innerHTML += `<span>${letter}</span>`;
    });
}

function showRightLetters() {
    const container = document.querySelector(".secret-word");
    container.innerHTML = "";
    secretWord.split("").forEach((letra) => {
        if (rightLetters.includes(letra)) {
            container.innerHTML += `<span>${letra}</span>`;
        } else {
            if(letra === " "){
                container.innerHTML += `<span> </span>`;
            } else if (letra === "-"){
                container.innerHTML += `<span>-</span>`;
            } else {
                container.innerHTML += `<span>_</span>`;
            }
        }
    });
}

function showWarningRepeatedLetter() {
    const div = document.querySelector(".repeated-letter");
    div.innerHTML = "<h4>Letra já utilizada!</h4>";
    setTimeout(function(){
        div.innerHTML = "";
    },4000);
}

function checkGameStatus() {
    let message = "";
    const container = document.querySelector(".secret-word");
    const partesCorpo = document.querySelectorAll(".body-parts");

    if (wrongLetters.length === partesCorpo.length) {
        message = "Você perdeu!<br>";
        message += 'A palavra era: "' + secretWord + '"';
    }

    if (secretWord === container.innerText) {
        message = "Você ganhou!";
    }

    if (message) {
        document.querySelector("#message").innerHTML = message;
        document.querySelector(".popup-container").style.display = "flex";
    }
}

function drawHangman() {
    const partesCorpo = document.querySelectorAll(".body-parts");
    for (let i = 0; i < wrongLetters.length; i++) {
        partesCorpo[i].style.display = "block";
    }
}

function isLetter(input) {
    return input >= 'a' && input <= 'z' || input >= 'A' && input <= 'Z' || input === 'ç' || input === 'Ç';
}

function isEnter(input) {
    return input === 'Enter';
}

function reiniciarJogo() {
    window.location.reload();
    
}