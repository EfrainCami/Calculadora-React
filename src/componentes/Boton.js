import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {

const esOperador = valor => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
};

    return(
        //Abajo usamos la función dolar que quiere decir que. dependiendo lo que valga children se va a reemplazar toda la función por "operador" o null
        <div 
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
            //aqui abajo usamos el () => como una función sin nombre y que no recibe nada, la cual solo llama a la función manejarClic, porque, sin ello, estábamos llamando a la función y eso daba error, lo correcto es esto, porque así estamos creando una función y es lo que debe ir en onClick, una función, no una llamada a otra función
            onClick={() => props.manejarClic(props.children)}>  
            {props.children}
        </div>
    );
}

export default Boton;