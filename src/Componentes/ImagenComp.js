import {useState, useEffect, memo} from 'react';
export default function Imagen(props)
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
			<img className={props.clase} src={imageUrl} alt="Imagen"/>
		</>);
}