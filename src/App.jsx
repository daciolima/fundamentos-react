import React from 'react';

import Primeiro from './components/base/Primeiro.component'
import ComParametro from './components/base/ComParametro.component'
import Fragmento from './components/base/Fragmento.component'
import Aleatorio from './components/base/Aleatorio.component'

export default () => {

    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>
            <Fragmento />  
            <ComParametro
                titulo="Nota" 
                nome="Pedro"
                nota={9.5} />
            <Primeiro></Primeiro>
            <Aleatorio min={1} max={25} />    
        </div>   
    )
}