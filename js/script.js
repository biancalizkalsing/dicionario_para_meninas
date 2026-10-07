const produtos = [

{
nome:"Hidratante Facial Creamy",
img:"img/hidra.webp"
},

{
nome:"Pó solto Niina Secrets",
img:"img/po.webp"
},

{
nome:"Serum hidratante Creamy skincare",
img:"img/serum.webp"
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