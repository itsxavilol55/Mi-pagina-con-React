import './Cubo.css';
import Imagen from '../ImagenComp';
export default function Cubo() 
{
	return(
		<div className="mainDiv">
			<div className="cubo">
				<div className="cara1">
					<Imagen clase="cara"/>
				</div>
				<div className="cara2">
					<Imagen clase="cara"/>
				</div>
				<div className="cara3">
					<Imagen clase="cara"/>
				</div>
				<div className="cara4">
					<Imagen clase="cara"/>
				</div>
				<div className="cara5">
					<Imagen clase="cara"/>
				</div>
				<div className="cara6">
					<Imagen clase="cara"/>
				</div>
			</div>
		</div>);
}
