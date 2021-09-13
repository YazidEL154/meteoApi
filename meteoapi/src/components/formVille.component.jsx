import React from 'react'
import "./formulaire.css"

export const Form = (props) =>{


    //renvoi le formulaire permettant de récupérer la ville entrée par l'utilisateur
    return <div className="formulaire">
        <form onSubmit={(e)=>props.recupMeteo(e)}>
        <input type="text" className="inputVille" name="ville" placeholder="Ville" required/>
        <input type="text" className="inputPays" name="pays" placeholder="Pays (ex: FR, US ...)" required/>
        <button className="submit" name="submit" >Valider</button>
        </form>
    </div>
}