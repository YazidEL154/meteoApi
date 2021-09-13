import React from 'react'
import "./temperature.css"

export const Temperature = (props) =>{

return <div className="temp">
    <h2 className="texttemp">Temp. max :</h2> <h2 className="h2temp">{props.temp_max}&deg;</h2> <h2 className="texttemp">Temp. min :</h2> <h2 className="h2temp">{props.temp_min}&deg;</h2>
</div>

}