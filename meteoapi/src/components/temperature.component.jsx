import React from 'react'

export const Temperature = (props) =>{

return <div className="temp">
    <h3>{props.temp_max}&deg; | {props.temp_min}&deg;</h3>
</div>

}