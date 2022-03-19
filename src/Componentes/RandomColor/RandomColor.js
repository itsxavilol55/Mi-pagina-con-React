import React, { useState } from 'react';
import './RandomColor.css'
export default function RandomColor()
{
	const [newColor, setColor] = useState("#f1e23d");
	return(
		<div id="contentMainRc">
			<div id="gradienteRc"> 
				<div id="contentItemsRc">
					<p id="parrafo" className="parrafoRc"> </p>
					<button className="boton" onClick={()=> generaColor()}>Click Me para cambiar el color</button>
				</div>
			</div>
		</div>);
	function generaColor()
	{
		const content = document.getElementById('contentMainRc');
		let num1 = (Math.random()*254);
		let num2 = (Math.random()*254);
		let num3 = (Math.random()*254);
		setColor(	'#'+ Math.round(num1).toString(16)+ 
					'' + Math.round(num2).toString(16)+ 
					'' + Math.round(num3).toString(16));
		content.style.backgroundColor=newColor;
		document.getElementById('parrafo').textContent="Color de fondo: "+newColor;
	}
}