import React from 'react'

export default function(props){
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado"
    return (
        <div>
            <h2> {props.titulo} </h2>
            <h3> {props.subtitulo} tua nota é {props.nota}</h3>
            <h3>{status}</h3>
        </div>
    )
}