window.onload=mouse;
var imagen1;
imagen1="<img src='";
var medidas="' height='478vw' width='1112vw'/>";
var imagencam="<img src='";
var imagensal="<img src='./imgs/galaxiapri.jpg' height='478vw' width='1112vw'/> ";


function mouse() {
	
	var uno=document.getElementById("im1");
	uno.addEventListener("click",function() {
									mostrar("./imgs/g1.jpg");
								});
	uno.addEventListener("mouseover",function() {
									cambiar("./imgs/g1.jpg");
								});
	uno.addEventListener("mouseout",salir);

	var dos=document.getElementById("im2");
	dos.addEventListener("click",function() {
									mostrar("./imgs/g2.jpg");
								});
	dos.addEventListener("mouseover",function() {
									cambiar("./imgs/g2.jpg");
								});
	dos.addEventListener("mouseout",salir);

	var tres=document.getElementById("im3");
	tres.addEventListener("click",function() {
									mostrar("./imgs/g3.jpg");
								});
	tres.addEventListener("mouseover",function() {
									cambiar("./imgs/g3.jpg");
								});
	tres.addEventListener("mouseout",salir);

	var cuatro=document.getElementById("im4");
	cuatro.addEventListener("click",function() {
									mostrar("./imgs/g4.jpg");
								});
	cuatro.addEventListener("mouseover",function() {
									cambiar("./imgs/g4.jpg");
								});
	cuatro.addEventListener("mouseout",salir);

	var cinco=document.getElementById("im5");
	cinco.addEventListener("click",function() {
									mostrar("./imgs/g5.jpg");
								});
	cinco.addEventListener("mouseover",function() {
									cambiar("./imgs/g5.jpg");
								});
	cinco.addEventListener("mouseout",salir);

	var seis=document.getElementById("im6");
	seis.addEventListener("click",function() {
									mostrar("./imgs/g6.jpg");
								});
	seis.addEventListener("mouseover",function() {
									cambiar("./imgs/g6.jpg");
								});
	seis.addEventListener("mouseout",salir);

	var siete=document.getElementById("im7");
	siete.addEventListener("click",function() {
									mostrar("./imgs/g7.jpg");
								});
	siete.addEventListener("mouseover",function() {
									cambiar("./imgs/g7.jpg");
								});
	siete.addEventListener("mouseout",salir);

} 

function mostrar(imagen){

	imagen1 +=imagen;

	imagen1 +=medidas;

	var m=document.getElementById('con2').innerHTML = imagen1;
	imagensal=imagen1;
	imagen1="<img src='";

}

function cambiar(imagen){
	imagencam +=imagen;

	imagencam +=medidas;

	var m=document.getElementById('con2').innerHTML = imagencam;
	imagencam="<img src='";
}

function salir(){

	var m=document.getElementById('con2').innerHTML = imagensal;
	

}



