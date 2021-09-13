import React from 'react'

export const IconText = (props) =>{

return <div className="icon-text">
    <img src={props.icon} alt="icon meteo"/> | <h3>{props.text}</h3>
</div>

}