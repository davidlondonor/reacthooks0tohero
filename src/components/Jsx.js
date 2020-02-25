import React, { Fragment } from "react";

const Jsx = () => {
    //const saludo = "Hola Monstro";
    const temperatura = 21;

    return (
        <Fragment>
            <h1>Frio o Calor?</h1>
            <h4>{temperatura > 20 ? "Sí, que calor" : "No, que frio"}</h4>
        </Fragment>
    );
};

export default Jsx;
