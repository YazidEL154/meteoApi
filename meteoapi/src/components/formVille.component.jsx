import React from 'react'
import "./formulaire.css"

export const Form = (props) =>{


    //renvoi le formulaire permettant de récupérer la ville entrée par l'utilisateur
    return <div className="formulaire">
        <form onSubmit={(e)=>props.recupMeteo(e)}>
        <input type="text" className="input" name="ville" id="ville" placeholder="Ville" required/>
        <input type="text" className="input" name="pays" id="pays" placeholder="Pays (ex: FR, US ...)" required/>
        <button className="submit" name="submit" id="submit" >Meteo par ville</button>
        </form>
    </div>
}