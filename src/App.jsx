import React from 'react';

import "./App.css";

import Primeiro from './components/base/Primeiro.component';
import ComParametro from './components/base/ComParametro.component';
import Fragmento from './components/base/Fragmento.component';
import Aleatorio from './components/base/Aleatorio.component';
import Card from './components/layout/Card';

export default () => {

    return (
        <div className="App">
            <h1>Fundamentos do React</h1>
            <div className="Cards" >
                <Card titulo="#4 - Desafio Números Aleatórios" color="#D85C5C">
                    <Aleatorio min={1} max={25} />      
                </Card> 
                <Card titulo="#3 - Fragment" color="#246732">
                    <Fragmento />       
                </Card> 
                <Card titulo="#2 - Com Parâmetro" color="#886A2F">
                    <ComParametro
                        titulo="Nota" 
                        nome="Pedro"
                        nota={9.5} />  
                </Card>           
                <Card titulo="#1 - Primeiro" color="#4D215A">
                    <Primeiro></Primeiro>    
                </Card> 
            </div>
            
              
            
            
            
        </div>   
    )
}