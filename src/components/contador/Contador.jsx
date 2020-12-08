import React, { Component } from 'react';
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.stepInicial || 5
    }

    // métodos usando ArrowFunction conserva o this referete a instância classe quando for usada em evento. Ex onClick.
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    // Pega o valor colocado no input(event) e seta na propriedade passo alterando o seu estado.
    // sinal de + antes de event transforma o valor do target em inteiro.
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }


    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setDec={this.dec} setInc={this.inc} />
                <Display numero={this.state.numero} />
            </div>
        )
    }
}

export default Contador