import './Ejemplo.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
function Square(props)
{
    return(<button 
    			className="square" 
    			onClick={props.onClick}>
    			{props.value}
    		</button>);
}
function calculateWinner(squares) 
{
  	const lines = [
    	[0, 1, 2],
    	[3, 4, 5],
    	[6, 7, 8],
    	[0, 3, 6],
    	[1, 4, 7],
    	[2, 5, 8],
    	[0, 4, 8],
    	[2, 4, 6]];
  	for (let i = 0; i < lines.length; i++) 
  	{
    	const [a, b, c] = lines[i];
    	if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      		return squares[a];
  	}
  	return null;
}
function Board()
{
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [xIsNext, setNext] = useState(true);
    const winner = calculateWinner(cuadros);
    let status;
    if (winner)
    	status = 'Winner: ' + winner;
    else
    	status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    function handleClick(i)
	{
    	const squares = cuadros.slice();
    	if (calculateWinner(squares) || squares[i])
      		return;
    	squares[i] = xIsNext ? 'X' : 'O';
    	setCuadros(squares);
    	setNext(!xIsNext);
  	}
    function renderCuadro(i)
	{
		return(
      		<Square
        		value={cuadros[i]}
        		onClick={() => handleClick(i)}
        	/>);
	}
    return(
      	<div>
        	<div className="status">{status}</div>
        	<div className="board-row">
          		{renderCuadro(0)}
          		{renderCuadro(1)}
          		{renderCuadro(2)}
        	</div>
        	<div className="board-row">
          		{renderCuadro(3)}
          		{renderCuadro(4)}
          		{renderCuadro(5)}
        	</div>
        	<div className="board-row">
          		{renderCuadro(6)}
          		{renderCuadro(7)}
          		{renderCuadro(8)}
        	</div>
      	</div>);
}
export default function Game() 
{
    return( 
    	<div className = "game" >
            <div className = "game-board">
            	<Board/>
            </div> 
            <div className = "game-info">
            	<div></div> 
            	<ol></ol> 
            </div> 
        </div>);
}