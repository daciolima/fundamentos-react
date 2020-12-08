import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor="assoInput">Passo:</label>
            <input  
                id="passo" 
                type="number" 
                value={props.passo} 
                onChange={e => props.setPasso(+e.target.value)} 
            />
        </div>
    )
}