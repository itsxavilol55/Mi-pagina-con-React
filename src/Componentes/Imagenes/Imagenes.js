import './Imagenes.css';
import {useState, useEffect} from 'react';
export default function Imagenes () 
{
	let array1 = new Array(5);
	const [count, setCount] = useState(0);
	array1.fill("");
	return(
		<div className="divCenter">
			<button id="boton2" onClick={setCount(2)}>
				<i className="fa-solid fa-angles-left"></i>
			</button>
		 	<div className="divImag">
		 	{
		 		array1.map((x,index) => <Imagen key={index}/>)
		 	}
		 	</div>
			<button id="boton2"> 
				<i className="fa-solid fa-angles-right"></i>
			</button>
		</div>);
}
function Imagen()
{
	const API_URL = "https://picsum.photos/v2/list?page=2&limit=1000";
	const [imageUrl, setImageUrl] = useState("https://cdn.pixabay.com/photo/2015/02/22/17/56/loading-645268_960_720.jpg");
	useEffect(() => 
	{
		let num = Math.floor((Math.random()*100));
		fetch(API_URL)
		.then(response => response.json())
		.then(photos => setImageUrl(photos[num].download_url));
	}, []);
	return(
		<>
			<img src={imageUrl} alt="Imagen"/>
		</>);
}