import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basics/First'

//const tag = <strong> Olá Bebêzinho </strong>
const element = document.getElementById('root')
ReactDOM.render( 
    <div> 
        <Primeiro></Primeiro>
    </div>,
    element,
)