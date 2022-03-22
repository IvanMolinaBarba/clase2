import React, { useState } from 'react';


const ItemCount = ({stock , initial , onAdd}) => {
    const [contador, setContador] = useState(initial);

    const clickSum = () => {
        if (contador === stock) {
            return;
        }
            setContador(contador + 1);
    };

    const clickRes = () => {
        if (contador === initial) {
            return;
        }
       
            setContador(contador - 1);
        };

    const addToCart = () => {
        onAdd (contador);
    };
    return (
        <div>
            <h3>Venta de Cartas Pokemon</h3>
            <h1>{contador}</h1>
             
            <div style={{
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <button onClick={() => clickSum()}>Sumar 1</button>
                <button onClick={() => clickRes()}>Restar 1</button>
            </div>
            <div>
                <button onClick={() => addToCart() }>Add</button>
            </div>
        </div>
    );
};

export default ItemCount;