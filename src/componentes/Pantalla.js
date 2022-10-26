import React from "react";
import "../hojas-de-estilo/Pantalla.css";

//Esta es otra forma de definir un componente, en este caso, una función flecha
const Pantalla = ({ input }) => (
    <div className="input">
        {input}
    </div>
);

export default Pantalla;