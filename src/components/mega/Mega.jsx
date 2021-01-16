import "./Mega.css"
import React, { useState } from 'react'

export default props => {

    function gerarNumeroNaoRepetido(min, max, vetor){
        let valorCorrente = parseInt(Math.random()*(max - min)) + min;
        return vetor.includes(valorCorrente) ? gerarNumeroNaoRepetido(min, max, vetor) : valorCorrente
    }
    
    function gerarNumero(qtd) {
        const numeros = Array(qtd).fill(0).reduce(
            (nums) => {
                const novoNumero = gerarNumeroNaoRepetido(1, 60, nums);
                return [...nums, novoNumero]
            }, 
            [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

    const [qtde, setQtd] = useState(props.qtde || 6)
    const numeroInicial = Array(qtde).fill(0)
    const [numeros, setNumero] = useState(numeroInicial)
    const [msn, setMsn] = useState('')

    const showMsn = (qtde) => {
        setMsn('')
        if(qtde >= 60){
            setMsn('A quantidade deve ser menor que 60')
        } else {
            setNumero(gerarNumero(qtde))
        }
    }

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <label className="error">{msn}</label>
            <p></p>
            <label>Quant de Numeors</label>
            <input type='text' value={qtde} onChange={e => setQtd(+e.target.value)}/>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={_ => {
                    showMsn(qtde)
                }} >Gerar Numero</button>
        </div>
    )
}