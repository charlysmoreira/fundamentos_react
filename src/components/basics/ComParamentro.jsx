import React from 'react'

export default function ComParammentro(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <h2> { props.titulo }</h2>
            <p>  O Aluno <strong>{ props.aluno  }</strong> tirou  { props.nota  } e está <strong>{ status }</strong> </p>
        </div>
    )
}