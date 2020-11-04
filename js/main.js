/* */ //comenta um espaço determinado
function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";//traz o documento inteiro que está dentro desse ID.
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://beerorcoffee.com/coworking/space/global-labs--araraquara"); //abre em outra aba
    //window.location.href = "https://beerorcoffee.com/coworking/space/global-labs--araraquara";//abre na mesma aba
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //alert("Trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "Passe aqui o mouse";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1,n2){
    return n1 + n2;
}
//var validar = 0;//var global
function validaIdade(idade){
    var validar;//var local
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    } 
    return validar;//retorna o valor da variável 
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

//var d = new Date();
//alert(d.getMonth()+1);//começa contar do zero sempre tem que colocar + 1
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());

/*var count;
for(count=0; count <= 5; count++){
    alert(count);
};*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};*/

/*var idade = prompt("Qual sua idade");//exibe uma pergunta ao usuário
//var idade = 18;
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade")
};*/

/*
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]//dicionário e array
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {fruta: "maçã", cor: "vermelha"}//dicionário
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];//array
//lista.push("uva");//acrescenta um elemento à lista
//lista.pop();//tira um elemento da lista
//console.log(lista.length);//ver tamanho da lista
//console.log(lista.reverse());//mostra os elementos em ordem contrária
//console.log(lista);
//console.log(lista.toString());//traz para uma string
//console.log(lista.join(" - "));//coloca como vc quer a separação dos elementos

//alert(lista[1]);

/*
var nome= "Flávia Coltri";//aspas duplas string
var n1 = 5;
var n2 = 3;
var frase = "Japão é o maior time do mundo"
//alert( nome + " tem " + idade + " anos"); //+ concatena
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase());//jogo tudo para maiusculo
//console.log(frase.trim());//joga tudo para minusculo
//console.log(frase.replace("Japão", "Brasil"));//replace troca a palvra
//alert(frase.replace("Japão", "Brasil"));
*/