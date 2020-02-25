import React, { useState, Fragment } from "react";

const Contador = () => {
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log("me diste un clic");
        setNumero(numero + 1);
    };

    return (
        <Fragment>
            <h3>Mi primer component {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
};

export default Contador;
