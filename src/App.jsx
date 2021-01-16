import './App.css'
import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParamentro from './components/basics/ComParamentro'
import Fragmento from './components/basics/Fragment'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/basics/ListaAlunos'
import ListaProdutos from './components/basics/TabelaProduto'
import ParImpar from './components/condicional/ParImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (_) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card title="#12 - Mega" color="#2a558d">
                <Mega/>
            </Card>
            <Card title="#12 - Contador" color="#2ab7dd">
                <Contador valorInicial={20}/>
            </Card>
            <Card title="#11 - Formulario" color="#ddd2aa">
                <Input/>
            </Card>
            <Card title="#8 - Condicional" color="#2888ca">
                <ParImpar numero={23}/>
                <UsuarioInfo usuario={{nome:'Fernando'}}/>
                <UsuarioInfo/>
            </Card>
            <Card title="#7 - Tabela Produtos" color="#2aaaca">
                <ListaProdutos/>
            </Card>
            <Card title="#6 - Repetição" color="#2a22ca">
                <ListaAlunos/>
            </Card>
            <Card title="#5 - Família" color="#2ab7aa">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Joao"/>
                    <FamiliaMembro nome="Maria"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>
            <Card title="#4 - Aleatorio" color="#2ab7ca">
                <Aleatorio min = {2} max={50}/>
            </Card>
            <Card title="#3 - Fragmento" color="#3da4ab">
                <Fragmento></Fragmento>
            </Card>
            <Card title="#2 - Com Paramentro" color="#f6cd61">
                <ComParamentro titulo="Situação do aluno" aluno="Joao da Silva" nota={8.5}/>
            </Card>
            <Card title="#1 - Primeiro" color="#fe8a71">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)