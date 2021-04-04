var biblioteca = ['javascript', 'curso', 'computador', 'transporte', 'livraria', 'alura', 'programação', 'front-end']

var qtde = biblioteca.length - 1;
var pos = Math.round(Math.random() * qtde);
var palavra = biblioteca[pos];
var tam = palavra.length;
var cxLetras = [];
var acertos;
var errosMax = 4;
var erros = 0;
var img = [];
var acertou = false;
var jogando = false;
var jog;

function defineLetras(l) {
    for (var i = 0; i < 20; i++) {
        obj = document.getElementById('letra' + i).value = "";
        obj = document.getElementById('letra' + i).style.display = "none";
    }
    for (var i = 0; i < l; i++) {
        obj = document.getElementById('letra' + i).style.display = "inline-block";
    }
}

function jogar() {

    if (jog.value == '' || jog.value == null) {
        document.getElementById('dvCampoVazio').innerHTML = "⚠️ Digite uma letra";
        document.getElementById('dvCampoVazio').style.display = "block";
        document.getElementById('dvmsg').style.display = "none";
        document.getElementById('dvDica').style.display = "none";
    } else {
        document.getElementById('dvCampoVazio').style.display = "none";

        console.log(jog.value.toLowerCase())

        if (jogando) {
            var obj;
            var letraTmp;
            var letra;
            var pesq;
            letra = jog.value.toLowerCase();
            jog.value = '';
            acertou = false;
            pesq = palavra.match(letra);
            while (pesq != null) {
                letraTmp = palavra.search(letra);
                obj = document.getElementById('letra' + letraTmp).value = letra;
                palavra = palavra.replace(letra, '0');
                acertos++;
                pesq = palavra.match(letra);
                acertou = true;
            }
            if (!acertou) {
                document.getElementById('dvletrasdigitadas').innerHTML += letra.toUpperCase() + " ";

                erros++;
                if (erros < 5) {
                    if (erros == 1) {
                        document.getElementById('img').src = 'https://graficoeweb.com.br/images/codepen/img2.png'
                        document.getElementById('img-leite').src = 'https://graficoeweb.com.br/images/codepen/leite-3.png'
                    } else if (erros == 2) {
                        document.getElementById('img').src = 'https://graficoeweb.com.br/images/codepen/img3.png'
                        document.getElementById('img-leite').src = 'https://graficoeweb.com.br/images/codepen/leite-2.png'
                    } else if (erros == 3) {
                        document.getElementById('img').src = 'https://graficoeweb.com.br/images/codepen/img4.png'
                        document.getElementById('img-leite').src = 'https://graficoeweb.com.br/images/codepen/leite-1.png'
                    } else {
                        document.getElementById('img').src = 'https://graficoeweb.com.br/images/codepen/img5.png'
                        document.getElementById('img-leite').src = 'https://graficoeweb.com.br/images/codepen/leite-0.png'
                    }

                } else {
                    document.getElementById('dvDica').style.display = "none";
                    document.getElementById('img-leite').style.display = "none";
                    document.getElementById('img').src = 'https://graficoeweb.com.br/images/codepen/img6.png'
                    document.getElementById('dvmsg').innerHTML = "😞 PERDEU 🥺";
                    document.getElementById('dvmsg').style.display = "block";
                    document.getElementById('palavraSecreta').style.display = "block";
                    document.getElementById('palavraSecreta').innerHTML = "Palavra: " + biblioteca[pos];
                    document.getElementById('codePen').style.display = "block";
                    document.getElementById('codePen').innerHTML = '<a href="https://codepen.io/pesdesigner/full/XWpMOPv" target="_blank">👉 Mais projetos 😘</a>';
                    jogando = false;
                }
            }
            if (acertos == tam) {
                document.getElementById('dvDica').style.display = "none";
                document.getElementById('img-leite').style.display = "none";
                document.getElementById('img').src = 'https://graficoeweb.com.br/images/codepen/img7.png'
                document.getElementById('dvmsg').innerHTML = "🎉👏 GANHOU! 👏🎉";
                document.getElementById('dvmsg').style.display = "block";
                document.getElementById('palavraSecreta').style.display = "block";
                document.getElementById('palavraSecreta').innerHTML = "Palavra: " + biblioteca[pos];
                document.getElementById('codePen').style.display = "block";
                document.getElementById('codePen').innerHTML = '<a href="https://codepen.io/pesdesigner/full/XWpMOPv" target="_blank">👉 Mais projetos 😘</a>';
                jogando = false;
            }
        }
    }
}

function inicia() {
    jogando = true;
    jog = document.getElementById("letraJ");
    jog.value = "";
    acertos = 0;
    erros = 0;
    acertou = false;
    document.getElementById('dvletrasdigitadas').innerHTML = "Letras Digitadas: ";
    pos = Math.round(Math.random() * qtde);
    palavra = biblioteca[pos];
    tam = palavra.length;
    defineLetras(tam);
    document.getElementById('dvmsg').innerHTML = '';
    document.getElementById('img').src = 'https://graficoeweb.com.br/images/codepen/img1.png';
    document.getElementById('img-leite').style.display = "inline-block";
    document.getElementById('img-leite').src = 'https://graficoeweb.com.br/images/codepen/leite-4.png';
    document.getElementById('dvmsg').style.display = "none";
    document.getElementById('dvDica').style.display = "none";
    document.getElementById('palavraSecreta').style.display = "none";
    document.getElementById('codePen').style.display = "none";
}

function dica() {
    var dica = ''
    // 'javascript', 'curso', 'computador', 'transporte', 'livraria', 'alura', 'programação', 'front-end'
    switch (pos) {
        case 0:
            dica = 'Linguagem de programação';
            break;
        case 1:
            dica = 'Maneira de aprender algo';
            break;
        case 2:
            dica = 'Mouse, teclado e monitor';
            break;
        case 3:
            dica = 'ônibus, trem e avião';
            break;
        case 4:
            dica = "revistas, livros e HQ's";
            break;
        case 5:
            dica = 'A Maior plataforma de cursos';
            break;
        case 6:
            dica = 'Código, Linguagem e café';
            break;
        case 7:
            dica = 'Interface, Design e programação';
            break;
        default:
            dica = "Desculpe, não tenho dicas";
    }
    document.getElementById('dvCampoVazio').style.display = "none";
    document.getElementById('dvmsg').style.display = "none";
    document.getElementById('dvDica').innerHTML = "🙄 " + dica;
    document.getElementById('dvDica').style.display = "block";
}

window.addEventListener('load', inicia);