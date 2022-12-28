import React from "react";
import "../hojasDeEstilo/Caja.css";

function Caja ({ titulo, texto }) {
    return(
        <div className="contenedor-caja">
            <p className="titulo-caja">{titulo}: </p>
            <div className="caja">
                {texto}
            </div>
        </div>
    );
}

export default Caja;