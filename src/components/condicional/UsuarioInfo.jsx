import React from 'react'
import If, {Else} from './If'

export default props => {
    const user = props.usuario || {}
    return (
        <div>
            <If test={user && user.nome}>
                <span>Seja bem vindo <strong>{user.nome}</strong>!</span>
                <Else>
                    <span>Seja bem vindo <strong>Amigão</strong>!</span>
                </Else>
            </If>
        </div>
    )
}