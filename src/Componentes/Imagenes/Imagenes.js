import './Imagenes.css';
import {useState, useEffect, memo} from 'react';
import Imagen from '../ImagenComp';
export default function Imagenes () 
{
	let array1 = new Array(7);
	const [count, setCount] = useState(0);
	useEffect(() => 
	{
		inicialImagen();
	}, []);
	return(
		<div className="divCenter">
			<button id="boton20" onClick={()=> 
				{
					if(count == 0) setCount(array1.length-1);
					else setCount(count-1);
					cambiaImagenIzq(count, array1.length);
				}}>
				<i className="fa-solid fa-angles-left"></i>
			</button>
		 	<div className="divImag">
		 		<ListaImagenes array1={array1}/>
		 	</div>
			<button id="boton21" onClick={()=> 
				{
					if(count == array1.length-1) setCount(0);
					else setCount(count+1);
					cambiaImagenDer(count,array1.length);
				}}>
				<i className="fa-solid fa-angles-right"></i>
			</button>
		</div>);
}
function inicialImagen()
{
	let conteImg = document.getElementById('contenedor');
	conteImg.childNodes[0].classList.remove("imagen0");
}
function cambiaImagenIzq(valor,total)
{
	let conteImg = document.getElementById('contenedor');
	conteImg.childNodes[valor].classList.add("imagen0");
	if(valor == 0) conteImg.childNodes[total-1].classList.remove("imagen0");
	else conteImg.childNodes[valor-1].classList.remove("imagen0");
}
function cambiaImagenDer(valor,total)
{
	let conteImg = document.getElementById('contenedor');
	conteImg.childNodes[valor].classList.add("imagen0");
	if(valor == total-1) conteImg.childNodes[0].classList.remove("imagen0");
	else conteImg.childNodes[valor+1].classList.remove("imagen0");
	
}
const ListaImagenes = memo(
(props) =>
{
	props.array1.fill("");
	return(
		<div id="contenedor"> 
			{props.array1.map((x,index) => x = <Imagen clase="imagen0" key={index}/>)}
		</div>);
});