import { useEffect, useState } from 'react';
import "./erreur.css"


function Erreur () {


    useEffect(() => {
        document.title = "Erreur";
    }, []);

    return (
        <>
        <div className='Erreur'>
           <h1>404</h1>
           <p>Oups! La page que vous cherchez n'existe pas.</p>

            <a href="/">Retour à la page d'accueil</a>
           </div>
           </>
    );
}

export default Erreur;