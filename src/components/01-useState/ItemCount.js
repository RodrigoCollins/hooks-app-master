import React, { useState } from "react";


function ItemCount({ stock, onAdd }) {

    const initial = 1

    const [contador, mueveContador] = useState(initial);

    const sumaContador = () => {
        contador < stock
            ? mueveContador(prev => prev + 1)
            : alert("stock maximo alcanzado");
    };

    const restaContador = () => {
        contador > initial &&
            mueveContador(prev => prev - 1);
    };


    return (
        <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} >
            <h1 > {contador}   </h1>
            <button onClick={restaContador} > - </button>
            <button onClick={() => onAdd(contador)} disabled={contador < 1 && 'disabled'}> Agregar al Carrito </button>
            <button onClick={sumaContador} > + </button>
        </div>
    );
}

export default ItemCount;

