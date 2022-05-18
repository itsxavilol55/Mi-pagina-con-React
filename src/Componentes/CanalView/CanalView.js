import './CanalView.css';
import Imagen from '../ImagenComp';
import {useState,useEffect} from 'react';
export default function Canalview() 
{
	return(
		<>
		<div className="contenedor">
			<img src="https://unavatar.io/twitter/itsxavilol55" className="iconoCanal"/>
			<div className="etiquetas">
				<div>
					<p className="nombre">Javier Eduardo</p>
					<Contador/>
				</div>
				<div>
					<Subscrito/>
					<p>Unirse</p>
				</div>
			</div>
		</div>
		</>);
}
function Contador()
{
	let Subs = Math.round(Math.random()*10000000);
	let texta = ""+Subs;
	let subs2="";
	for(let i = texta.length; i>0; i--)
	{
		let parte11 = texta.substring(i,i-3);
		i-=2;
		if(i>1) subs2 = ","+parte11+subs2;
		else subs2 = parte11+subs2;
	}
	subs2 = subs2 +" suscritores"
	return(
		<>
			<p className="contador">{subs2}</p>
		</>);
}
function Subscrito()
{
	let text="";
	const [isSub, setIsSub]= useState(false);
	if(isSub) text="SUSCRITO";
	else text="SUSCRIBIRSE"
	return(
		<p 
			className={text} 
			onClick={()=> setIsSub(!isSub)}>
			{text}
		</p>);
}