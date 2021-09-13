import React from 'react'
import './icon-texte.css'

export const IconText = (props) =>{

return <div className="icon-text">
    <img src={props.icon} alt="(Indiquez une ville pour avoir l'icon de la météo)"/> <h1>{props.text}</h1>
</div>

}