import React from 'react';


const FunctionalComponent = ({nombre,apellido,children}) => {
    return (
       <div>
           <h3>Venta de Cartas Pokemon</h3>
           <h2>{nombre}</h2>
           <h2>{apellido}</h2>
           {children}
       </div>
    );
};

export default FunctionalComponent;