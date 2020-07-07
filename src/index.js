import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/base/Primeiro.component'
import ComParametro from './components/base/ComParametro.component'

import './index.css';


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Nota" 
            nome="Pedro"
            nota={9.5} />
    </div>,     
    document.getElementById("root") 
)