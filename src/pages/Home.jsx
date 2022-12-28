import React from "react";
import "../hojasDeEstilo/Home.css";
import { useNavigate } from "react-router-dom";
import {apiExterna, apiPromesa, apiBackend} from "../services/index";

function Home () {
    const navigate = useNavigate();
    const getDatosApiExterna = async () => {
        let response= await apiExterna();
        console.log(response);
        navigate("/formulario1",{
            state:{
                dato1:response.data.name,
                dato2:response.data.starship_class,
                dato3:response.data.manufacturer,
            }
        });
    };
    const getDatosApiPromesa = async () => {
        apiPromesa.then((resp)=>{
            navigate("/formulario2",{
                state:{
                    dato1:resp.dato1,
                    dato2:resp.dato2,
                    dato3:resp.dato3,
                }   
            }); 
        });
    }
    const getDatosApiBack = async () => {
        let response= await apiBackend();
        console.log(response);
        navigate("/formulario3",{
            state:{
                dato1:response.data.datos[0].dato1,
                dato2:response.data.datos[0].dato2,
                dato3:response.data.datos[0].dato3,
            }
        });
    };
    return(
        <div className="contenedor-principal">
            <button className="boton" onClick={getDatosApiExterna}>
                Api externa
            </button>
            <button className="boton" onClick={getDatosApiPromesa}>
                Promesa
            </button>
            <button className="boton" onClick={getDatosApiBack}>
                Api Backend
            </button>
        </div>
    );
};

export default Home;