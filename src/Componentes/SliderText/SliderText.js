import './SliderText.css';
import React, { useState } from 'react';
const mensaje1= new Comentario(
		'Javier Eduardo',
		'Ing de Software 1',
		'que crack es todo esto de la programacion'
);
const mensaje2= new Comentario(
		'Samuel David',
		'Web Diseñador 2',
		'madre mia willy'
);
const mensaje3= new Comentario(
		'Karen Elizabeth',
		'Ing en Algoritmos 3',
		'que pasaaaa tioooo'
);
const mensajes = [mensaje1,mensaje2, mensaje3];
function Comentario(Nombre1, Titulo1, coment1)
{
	let Nombre ="";
	let Titulo ="";
	let coment ="";
	this.Nombre= Nombre1;
	this.Titulo= Titulo1;
	this.coment= coment1;
}
export default function SliderText()
{
	const [index2, setIndex2] = useState(0);
	return(
		<div id="contentMainST">
			<h1 className="tituloComen"> Comentarios </h1>
			<div id="contentItems2"> 
				<p> {mensajes[index2].Nombre} </p>
				<p> {mensajes[index2].Titulo} </p>
				<p> {mensajes[index2].coment} </p>
			</div>
			<div id="botones">
				<button id="boton2" onClick={()=> {
					if(index2==0) setIndex2(mensajes.length-1);
					else setIndex2(index2-1);}}>
					<i className="fa-solid fa-angles-left"></i>
				</button>
				<button id="boton2" onClick={()=> {
					if(index2== mensajes.length-1) setIndex2(0);
					else setIndex2(index2+1);}}> 
					<i className="fa-solid fa-angles-right"></i>
				</button>
			</div>
		</div>);
}