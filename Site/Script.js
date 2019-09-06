//FAZENDO TROCA DE IMAGENS DIV(ID="SOBRE")
var img=[];
var slide;

function preCarregamento(){
    var s,i;
   
    for(i=0;i<6;i++){
        img[i] = new Image();
        img[i].src="Imagens/Projeto/ft"+s+".jpg";
    }

}

function carregarImg(imgs){
    slide.sytle.backgroundImage= "url('"+img[imgs].src+"')";
}

function inciando(){
    slide = document.getElementById("divslide");
}

window.addEventListener("load",iniciando);