import './App.css';
import arreglos from'./Componentes.js';
import {DataProvider} from './DataContext.js';
import {DataContext} from './DataContext';
import React, { useState , useContext } from 'react';
function Header(props) 
{ //muestra el header de la pagina y el boton del menu extendido
    return(
        <div className={props.clase}>
            <div className="mitad">Pagina con React Javier Eduardo</div>
            {props.children}
        </div>);
}
function MenuExp()
{
    const {setNumero} = useContext(DataContext);
    const [show, setShow] = useState(false);//muestra y oculta el menu con un if
    const ListaCompo = arreglos[1].map((comp,index) => // se crea la lista del menu
        <li key={index} onClick={()=> setNumero(index)}> 
            {comp} 
        </li>); // tambien se manda el indice al contenedor principal
    if(show)   //   para poder actualizarlo a cada componente diferente
    {
        return(
            <div className="menu">
                <div className="headerMenu">
                    <div className="mitad">Proyectos</div>
                    <div className="mitad2">
                        <i onClick={()=> setShow(false)} className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className="contentMenu"> 
                    <ul> {ListaCompo} </ul>
                </div>
            </div>);
    }
    else
    {
        return(<div className="mitad2"> 
                    <i onClick={()=> setShow(true)} className="fa-solid fa-bars"/>
                </div>);
    }
}
function Area() //muestra el diferente componente desde el array de componentes.js
{
    const {Numero} = useContext(DataContext);
    return(
        <div className="contentMainArea">
            {arreglos[0][Numero]}
        </div>);
}
function App()
{
    return(
        <div>
            <DataProvider>
                <Header clase="header">
                    <MenuExp/>
                </Header>
                <Area/>
            </DataProvider>
        </div>);
}
export default App;
