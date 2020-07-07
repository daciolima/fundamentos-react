import React from 'react';

export default function ComParametro(props) {

    const status = props.nota >= 7 ? 'aprovado' : 'reprovado';

    return (
        <div>
            <h1>{props.titulo}</h1>
            <p>O aluno <strong>{props.nome}</strong> tem nota <strong>{props.nota}</strong></p>
            e foi <strong>{ status }</strong>
        </div>
    )
}