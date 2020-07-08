import React from 'react';

export default (props) => {

    // Destructor
    const { min, max } = props;

    //Retorna número aleatorio conforme intervalo
    const resultado = numeroAleatorio(min, max);
    return (
    <div>o Numero aleatorio entre { min } e { max } é {resultado}</div>
    )
}

export function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1  ) + min);
}