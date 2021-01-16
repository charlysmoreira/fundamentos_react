import React from 'react'
import produtos from '../../data/produtos'
import "./TabelaProduto.css"

export default props => {

    function getLinhas()  {
        return produtos.map((produto, i) => {
            return <tr key={produto.id} className={i % 2 == 0 ? 'Impar': 'Par'}><td>{produto.id}</td><td>{produto.nome}</td><td>R$ {produto.preco}</td></tr>
        })
    }
    
    return (
        <div className='TabelaProduto'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}