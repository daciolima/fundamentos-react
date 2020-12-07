import React from 'react';
import DiretaFilho from './DiretaFilho'

// Passar comunicação de Pai para filho é via props

export default (props) => {
    return (
        <div>
            <DiretaFilho nome='Isaac' idade={2} nerd={true} />
            <DiretaFilho nome='Paulo' idade={5} nerd={false} />
        </div>
    )
}