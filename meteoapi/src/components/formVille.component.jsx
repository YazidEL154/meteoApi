import React from 'react'

export const Form = (props) =>{

    // this.state = {
    //     ville: undefined
    // }

    // const onSubmit = () => {
    //     this.setState({
    //         ville:
    //     })
    // }

    return <div className="formulaire">
        <form onSubmit={(e)=>props.recupMeteo(e)}>
        <input type="text" className="input" name="ville" id="ville" placeholder="Ville"/>
        <input type="text" className="input" name="pays" id="pays" placeholder="pays"/>
        <button className="submit" name="submit" id="submit" >Meteo par ville</button>
        </form>
    </div>
}