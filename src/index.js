import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'

//const tag = <strong> Olá Bebêzinho </strong>
const element = document.getElementById('root')
ReactDOM.render( 
    <div> 
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Oie"
            subtitulo="Tudo bem?"
            nota={6}/>
            <Fragmento/>
    </div>,
    element,
)