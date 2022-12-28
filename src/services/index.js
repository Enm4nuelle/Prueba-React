import axios from "axios";
//import https from "https";


export async function apiExterna(){
    const response=await axios.get("https://swapi.dev/api/starships/9/");
    return response;
}

export const apiPromesa = Promise.resolve({
    "dato1": "Este es el resultado del atributo dato 1",
    "dato2": "Este es el resultado del atributo dato 2",
    "dato3": "Este es el resultado del atributo dato 3",    
});

export async function apiBackend(){
    const response=await axios.get("http://127.0.0.1:5000/datos");
    return response;
}