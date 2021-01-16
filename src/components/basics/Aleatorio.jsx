import React from 'react'

export default (props) => {
    const {min, max} = props
    const aleatorio = parseInt(Math.random()*(max - min)) + min
    return (
        <div>
            <h2>
                Valores Aleatorios
            </h2>
            <p>
                Valor mínimo : <strong>{min}</strong>
            </p>
            <p>
                Valor máximo : <strong>{max}</strong>
            </p>
            <p>
                Valor escolhido : <strong>{aleatorio}</strong>
            </p>
        </div>
    )
}