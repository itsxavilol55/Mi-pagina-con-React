import './CanalView.css';
import Imagen from '../ImagenComp';
import {useState,useEffect} from 'react';
export default function Canalview() 
{
	return(
		<div className="contenedor">
			<Imagen clase="iconoCanal"/>
			<div className="etiquetas">
				<div>
					<p>Javier Eduardo</p>
					<Contador/>
				</div>
				<div>
					<Subscrito/>
					<p>Unirse</p>
				</div>
			</div>
		</div>);
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
	return(
		<>
			<p>{subs2}</p>
		</>);
}
function Subscrito()
{
	return(
		<>
			<p>Subs</p>
		</>);
}