import React from 'react'
import "./vent.css"

export const Vent = (props) =>{

return <div className="vent">
    <h2 className="textvent">Vitesse du vent :</h2> <h2 className="h2vent">{props.vent}</h2> <h2 className="textvent">Sens du vent :</h2> <h2 className="h2vent">{props.sens}</h2>
</div>

}