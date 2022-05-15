import RandomColor from './Componentes/RandomColor/RandomColor.js';
import Contador from './Componentes/Contador/Contador.js';
import SliderText from './Componentes/SliderText/SliderText.js';
import NavBarRespo from './Componentes/NavBarRespo/NavBarRespo.js';
import Calculadora from './Componentes/Calculadora/Calculadora.js';
import Imagenes from './Componentes/Imagenes/Imagenes';
import Cubo from './Componentes/Cubo/Cubo.js';
import Game from './Componentes/EjemploReact/ejemplo.js';
const componentesArray =
		[
			<RandomColor/>,
			<Contador/>,
			<SliderText/>,
			<NavBarRespo/>,
			<Calculadora/>,
			<Imagenes/>,
			<Cubo/>,
			<Game/>
		]; 				
const NombresComp = 
		[
			"Color Random",				
			"Contador",
			"Slider de Texto",
			"Nav Bar Responsive",
			"Calculadora",
			"Carrucel de Imagenes",
			"Cubo Imagenes",
			"Juego React"
		];				
const arreglos = [componentesArray,NombresComp];
export default arreglos;			
// se mandan el componente y su nombre a la app.js
// para asi poder mostrarlos en pantalla
