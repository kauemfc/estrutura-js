let cargo = 'gerente';
let salario = 2000;

switch(cargo){
    case 'gerente':
        salario = salario * 1.15;
        document.write(salario + '<br>');
    break;

    case 'supervisor':
        salario = salario * 1.10;
        document.write(salario + '<br>');
    break;

    default:
        salario = salario * 5.05;
        document.write(salario + '<br>');
}

document.write('Função sem parâmetro' + '<br>')

function imprimirnoConsole(){
    document.write('Olá, mundo!' + '<br>');
}

imprimirnoConsole();

document.write('Função com parâmetro' + '<br>');

function calc(n1, n2){
    return n1 * n2;
}

let resultado = calc(15, 5);
document.write(resultado + '<br>');

document.write('Função por variável' + '<br>');

const textPorParametro = function(texto){
    document.write(texto);
}

textPorParametro('Testando a minha função por variável em JavaScript' + '<br>');

document.write('Escopo' + '<br>');

let y = 10;

function imprimir(){
    let y = 150;
    document.write(y);
}

imprimir(y);

document.write('<br>');

document.write(y);

document.write('Função Arrow Function' + '<br>');

let teste = () => {
    document.write('Testando Arrow Function');
}

teste();

document.write('Array' + '<br>');

let num = [1, 2, 3, 4];
let nome = ['Ana', 'Maria', 'Hyan'];
let bool = [true, false];
let misturado = [1, 'Matheus', true];

document.write(num[2]);

document.write('<br>');

document.write('Propriedades' + '<br>');

let name = 'José';
document.write(name.length);

document.write('<br>');

let marca = 'niKE';
document.write(marca.toLocaleUpperCase());
document.write('<br>');
document.write(marca.toLocaleLowerCase());