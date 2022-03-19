import React, { useState } from 'react';
import './NavBarRespo.css';
export default function NavBarRespo()
{
	return(
		<div className="mainContainerNav">
			<div className="NavBar">
				<div className="Titulo1Nav"> Nav Bar Responsive </div>
	            <i onClick={()=> CambiaMenu(false)} className="iconoEquis fa-solid fa-bars"></i>
	                <div id="menuResponsive" className="Content2Nav">
						<div className="contentNav">
							<div className="iconoNav">
								<i onClick={() => CambiaMenu(true)} className="iconoBarra fa-solid fa-xmark"></i>
							</div>
							<p> Home    </p>
							<p> About   </p>
							<p> Project </p>
							<p> Contact </p>
						</div>
						<div className="contentIcons"> 
							<i className="fa-brands fa-twitter"></i>
							<i className="fa-solid fa-envelope"></i>
							<i className="fa-brands fa-whatsapp"></i>
							<i className="fa-brands fa-instagram"></i>
							<i className="fa-brands fa-github"></i>
							<i className="fa-brands fa-linkedin"></i>
							<i className="fa-brands fa-telegram"></i>
						</div>
					</div>
			</div>
		</div>);
}
function CambiaMenu(valor)
{
	valor ? 
		document.getElementById('menuResponsive').classList.add('mostrarMenu')
		  :
		document.getElementById('menuResponsive').classList.remove('mostrarMenu')
}
