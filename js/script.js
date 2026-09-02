const produtos = [

{
nome:"Base Líquida",
img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500"
},

{
nome:"Batom Matte",
img:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500"
},

{
nome:"Máscara de Cílios",
img:"https://images.unsplash.com/photo-1631214540242-6f6b5c4b30af?w=500"
}

];

let indice = 0;

function atualizar(){

const img = document.getElementById("imgProduto");
const nome = document.getElementById("nomeProduto");

if(img && nome){

img.src = produtos[indice].img;
nome.innerText = produtos[indice].nome;

}

}

function avancar(){

indice++;

if(indice >= produtos.length){

indice = 0;

}

atualizar();

}

function voltar(){

indice--;

if(indice < 0){

indice = produtos.length - 1;

}

atualizar();

}

function avaliacao(produto){

alert(
produto +
"\n\n⭐⭐⭐⭐⭐ Muito bom!\n\n⭐⭐⭐⭐ Excelente custo-benefício."
);

}