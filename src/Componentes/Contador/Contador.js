import React, { useState } from 'react';
import './Contador.css';
export default function Contador()
{
	const [Count, setCount] = useState(0);
	return(
		<div id="contentMain2">
			<div id="contentItems" className="contentMiddle">
				<h1 id="count">Contador <br/> {Count} </h1>
				<div id="contentItemsCont">
					<button className="boton2" onClick={()=> 
						{
							setCount(Count-1);
							funcionAsinc();
						}}> Decrementar </button>
					<button className="boton2" onClick={()=> 
						{ 
							setCount(0);
							funcionAsinc();
						}}> Reiniciar </button>
					<button className="boton2" onClick={()=> 
						{ 
							setCount(Count+1);
							funcionAsinc();
						}}> Incrementar </button>
				</div>
			</div>
		</div>);
	async function funcionAsinc()
	{
		try {
			const result = await cambiaColor();
		}
		catch(error){ console.log("error");}
	}
	function cambiaColor()
	{
		return new Promise(resolve => {
			const countDocu = document.getElementById('count');
			if(Count==0){ 	  countDocu.style.color="black"; }
			else if(Count>0){ countDocu.style.color="green"; }
			else if(Count<0){ countDocu.style.color="red";   }
  		});
	}
}