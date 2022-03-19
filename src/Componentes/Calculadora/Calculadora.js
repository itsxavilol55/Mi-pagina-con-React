import './Calculadora.css';
export default function Contador()
{
	console.log("render");
	return(
		<div className="Calculadora">
			<input className="inputNume" type="text" onKeyPress={(event)=> validaTeclas(event)} id="inputNume"/>
			<div className="contentNum">
				<Boton text="/"/>
				<Boton text="-"/>
				<Boton text="%"/>
				<Boton text="+"/>
				<Boton text="*"/>
				<Boton text="X"/>
				<Boton text="1"/>
				<Boton text="2"/>
				<Boton text="3"/>
				<Boton text="4"/>
				<Boton text="5"/>
				<Boton text="6"/>
				<Boton text="7"/>
				<Boton text="8"/>
				<Boton text="9"/>
				<Boton text="0"/>
				<Boton text="."/>
				<Boton text="="/>
			</div>
		</div>);
}
function validaTeclas(event) //validacion de las teclas introducidas por teclado
{
	let keyCode = event.charCode; 
	let keyText = String.fromCharCode(keyCode).toString();
	if(validacionDoble(keyText)){ } //convierte el evento en un string y dependiendo 
	else						//del resultado de la validacion coloca 
	{							//el valor en el input
		event.preventDefault();
		return false;
	}
}
function validacionDoble(key)
{
	var inputNume = document.getElementById("inputNume");
	let valueT = inputNume.value; //obtiene el valor del input
	let ultimo = valueT[valueT.length-1]; //obtiene el utimo valor del input
	if(ultimo == undefined) ultimo=""; //define el ultimo valor
	let nums= [48,49,50,51,52,53,54,55,56,57];//codigos ascii del los numeros 0-9
	let operadores = [37,42,43,45,47]; //codigos de los operadores
	return nums.includes(key.charCodeAt(0)) || // el caracter ingresado debe ser un numero
	(operadores.includes(key.charCodeAt(0)) && nums.includes(ultimo.charCodeAt(0)))||
	(!valueT.includes(".") && key == "." && nums.includes(ultimo.charCodeAt(0)));
	//valida tambien que no se pongan 2 caracteres seguidos y que solo se puedan poner 
	//puntos al lado de un numero
}
function cambiaTexto(texto)
{
	var inputNume = document.getElementById("inputNume");
	let valueT = inputNume.value;
	if(texto=="=" && valueT)
		valueT = new Function('return ' + valueT)();
	else if(texto=="X")
		valueT ="";
	else
		if(validacionDoble(texto))
			valueT=valueT+texto;
	inputNume.value = valueT;
}
function Boton(props)
{
	return(
		<>
			<button className="botonNumero" 
					onClick={()=> cambiaTexto(props.text)}> 
						{props.text} 
			</button>
		</>);
}