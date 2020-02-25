import React, { useState, Fragment } from "react";

const Lista = () => {
    const [arrayNumero, setNumero] = useState([1, 2, 3, 4, 5, 6]);
    const agregarElemento = () => {
        console.log('click')
    }
    return (
        <Fragment>
            <h2>Listaa</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {arrayNumero.map((item, index) => (
                <p key={index}>
                    {item} - {index}
                </p>
            ))}
        </Fragment>
    );
};

export default Lista;
