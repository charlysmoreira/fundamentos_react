import './Contador.css'
import React, { Component } from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.valorInicial || 0,
        passo : this.props.passo || 0
    }

    enc = () => {
        this.setState({
            numero : this.state.numero + this.state.passo 
        });
    }

    denc = () => {
        this.setState({
            numero : this.state.numero - this.state.passo 
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo : novoPasso
        })
    }

    render(){
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setEnc={this.enc} setDenc={this.denc} />
            </div>
        )
    }
}

export default Contador