import './CanalView.css';
import {useState,useEffect} from 'react';
export default function Canalview() 
{
	const [subs, setSubs]= useState(Math.round(Math.random()*10000000));
	const [isSub, setIsSub]= useState(false);
	const [redond,setRedond]= useState(false);
	const [subs2, setSubs2]= useState(subs);
	return(
		<>
		<div className="contenedor">
			<img src="https://unavatar.io/twitter/itsxavilol55" className="iconoCanal"/>
			<div className="etiquetas">
				<div>
					<p className="nombre">Javier Eduardo</p>
					<Contador subs={subs}/>
				</div>
				<div>
					<Subscrito 
						isSub={isSub} 
						setIsSub={setIsSub}
						subs={subs}
						setSubs={setSubs}/>
					<Unirse isSub={isSub}/>
				</div>
			</div>
			<Campana isSub={isSub}/>
		</div>
		<button 
			onClick={()=>
			{
				setRedond(!redond);
				Cambiar(subs, setSubs,redond,subs2);
			}}
			className="switchSubs">Redondear Subs</button>
		</>);
}
function Cambiar(subs, setSubs,redond,subs2) 
{
	let subsAux = subs;
	if(!redond)
	{
		subsAux = Math.trunc(subsAux / 10000);
		setSubs(subsAux*10000);
	}
	else
		setSubs(subs2);
}
const Campana = ({isSub}) =>
{
	const [CampAct, setCampAct] = useState(false);
	if(isSub)
	{
		if(CampAct) return(<i onClick={()=> setCampAct(!CampAct)} className="Campana fa-solid fa-bell"></i>);
		else return(<i onClick={()=> setCampAct(!CampAct)} className="Campana fa-regular fa-bell"></i>);
	} 
}
const Unirse = ({isSub}) =>
{
	if(isSub) return(<p className="contador" style={{color: "#1af"}}>UNIRSE</p>);
}
function Contador(props)
{
	let texta = ""+props.subs;
	let subs2="";
	for(let i = texta.length; i>0; i--)
	{
		let parte11 = texta.substring(i,i-3);
		i-=2;
		if(i>1) subs2 = ","+parte11+subs2;
		else subs2 = parte11+subs2;
	}
	subs2 = subs2 +" suscriptores";
	return(
		<>
			<p className="contador">{subs2}</p>
		</>);
}
function Subscrito({isSub, setIsSub,subs, setSubs})
{
	let text="";
	if(isSub) text="SUSCRITO";
	else text="SUSCRIBIRSE";
	return(
		<p 
			className={text} 
			onClick={()=> 
			{
				setIsSub(!isSub);
				if(!isSub) setSubs(subs+1);
				else setSubs(subs-1);
			}}>
			{text}
		</p>);
}