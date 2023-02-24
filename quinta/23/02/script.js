

 // imprime na tela
// document.write("<h1>hellow word</h1> "); 


//  // escrevendo usando id  
// document.getElementById("conteudo").innerHTML = " <h2>meu conteúdo</h2>"


//  // imprime no console..
// console.log("cachorro");

function somar(){
    event.preventDefault();
    document.getElementById("resultado").innerHTML = "resultado é:";
    document.getElementById("resultado").innerHTML += Number(valor1.value) + Number(valor2.value);
    limparformulario();
    
}

function subtrair(){
    event.preventDefault();
    document.getElementById("resultado").innerHTML = "resultado é:";
    document.getElementById("resultado").innerHTML += valor1.value - valor2.value;
    limparformulario();

}
function multiplicar(){
    event.preventDefault();
    document.getElementById("resultado").innerHTML = "resultado é:";
    document.getElementById("resultado").innerHTML += valor1.value * valor2.value;
    limparformulario();

}
function dividir(){
    event.preventDefault();
    document.getElementById("resultado").innerHTML = "resultado é:";
    document.getElementById("resultado").innerHTML += valor1.value / valor2.value;
    limparformulario();

}

function limparformulario(){
    document.getElementById("formulario").reset();
}