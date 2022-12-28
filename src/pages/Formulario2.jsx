import React from "react";
import "../hojasDeEstilo/Formulario.css";
import "../hojasDeEstilo/Formulario2.css";
import Caja from "../componentes/Caja";
import { useLocation } from "react-router-dom";

function Formulario2 () {
    const {state} = useLocation();
    console.log(state);
    const dato1 = state.dato1;
    const dato2 = state.dato2;
    const dato3 = state.dato3;
    return(
        <div className="contenedor-formulario2">
            <h1 className="titulo-formulario">Formulario:</h1>
            <div className="contenedor-cajas">
                <div className="contenedor-caja1">
                    <Caja titulo="Dato 1" texto={dato1}/>
                    <Caja titulo="Dato 2" texto={dato2}/>
                </div>
                <div className="contenedor-caja2">
                    <Caja titulo="Dato 3" texto={dato3}/>
                </div>
            </div>
        </div>
    );
}

export default Formulario2;