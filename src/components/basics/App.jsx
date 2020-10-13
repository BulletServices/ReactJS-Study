import React from "react"
import Primeiro from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'

export default function App(props) {
    return (
<div> 
    <Fragmento/>
    <Primeiro/>
    <ComParametro 
        titulo="Oie"
        subtitulo="Tudo bem?"
        nota={6}
    />
</div>
    )
}

