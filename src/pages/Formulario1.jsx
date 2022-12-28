import React from "react";
import { useLocation } from "react-router-dom";
import "../hojasDeEstilo/Formulario.css";
import "../hojasDeEstilo/Formulario1.css";
import Caja from "../componentes/Caja";

function Formulario1 () {
    const {state} = useLocation();
    console.log(state);
    const dato1 = state.dato1;
    const dato2 = state.dato2;
    const dato3 = state.dato3;
    return(
        <div className="contenedor-formulario1">
            <h1 className="titulo-formulario">Formulario:</h1>
            <div className="contenedor-cajas">
                <div className="contenedor-cajas">
                    <Caja titulo="Dato 1" texto={dato1}/>
                </div>
                <div className="contenedor-cajas">
                    <Caja titulo="Dato 2" texto={dato2}/>
                </div>
                <div className="contenedor-cajas">
                    <Caja titulo="Dato 3" texto={dato3}/>
                </div>
            </div>
        </div>
    );
}

export default Formulario1;