import React from 'react'

export const Meteo = (props) =>{

    return <div className="container">
        <h1>Vérifiez la météo avant d'aller en terrasse !</h1>

        <h2>{props.ville} | {props.pays}</h2>
    </div>
}