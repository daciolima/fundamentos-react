import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho'

// Passar comunicação do Filho para filho é via função.
// Pai criar função, Filha recebe essa função via propriedades. 

export default (props) => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade ] = useState(3)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }


    return (
        <div>
            
            <div>
                <span>{nome} - </span>
                <span>{idade} - </span>
                <span>{nerd ? 'Verdadeiro' : 'False'}</span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}