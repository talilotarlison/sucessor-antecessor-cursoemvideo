var caixa = [];
 
function adiciona() {
 
var input = document.querySelector("input");
var inputValor = input.value.toUpperCase();
 
  if (inputValor=== ""){
    alert("Nome Vazio")
  }else{
caixa.push(inputValor);
  }
console.log(caixa)
var conteudo = document.querySelector(".numeroNaCaixa");
 
caixa.map((item)=>{
 
   conteudo.innerHTML = `<p> Nome <strong>${item}</strong> adcionado na caixa de sorteio </p>`;
 
})
 input.value = '';
}

function sortear(){
  var conteudoLista = document.querySelector(".listaDeNomes");
  
  caixa.map((item)=>{
 
   conteudoLista.innerHTML += `<p><strong> ☑ - ${item}</strong> </p>`;
 
});
  
  //FUNÇÃO DE SORTEIO
   tamanhoCaixa = caixa.length; 
  sortearNome(tamanhoCaixa)
}


function sortearNome(tamanhoCaixa){

  console.log(tamanhoCaixa)
  
  var resultadoSorteio = document.querySelector(".resultado h1");
  
    var resultadoSort = document.querySelector(".resultado h2");
  
  numeroEscolhido = Math.floor(Math.random() * tamanhoCaixa);
  resultadoSorteio.innerText = `Nome escolhido foi:`;
  resultadoSort.innerText = `${caixa[numeroEscolhido]}` ;
}