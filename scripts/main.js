/* exemplo de uso de objetos
    const meuCabecalho = document.querySelector('h1');
    meuCabecalho.textContent = 'Ola mundo!';
*/

let minhaVariavel;

minhaVariavel = 'Bob';

function multiplica(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

/*document.querySelector('html').onclick = function() {
    alert('Ai! Pare de me cutucar!');
}*/

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/robot.png'){
        minhaImagem.setAttribute('src', 'images/robot2.png')
    }
    else {
        minhaImagem.setAttribute ('src', 'images/robot.png')
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome === null){
        defineNomeUsuario();
    } else {   
        localStorage.setItem('nome', meuNome);
        meuCabecalho.textContent = 'Robots are cool machines, ' + meuNome;
    }
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Robots are cool machines, ' + nomeGuardado;
}

meuBotao.onclick = function() {defineNomeUsuario();}