import React, { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {

    // state du toggle sur le menu en mode mobile via le bouton
    const [toggleMenu, setToggleMenu] = useState(false);
    // state pour récupérer la largeur de l'écran
    const [largeur, setLargeur] = useState(window.innerWidth);

    // FOnction pour toggle le menu en mode mobile
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    // useEffect -> Ajout d'un addEventListener sur le resize de l'écran
    useEffect(() => {
        // Fonction qui change la valeur de la variable largeur suivant la taille de l'écran
        const changeWidth = () => {
            setLargeur(window.innerWidth)
        }
        // Quand on resize l'écran, on appelle la fonction changeWidth qui change la variable largeur
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <nav>
            {/* SI toggleMenu OU largeur de l'écran > 500px, alors on affiche la navbar */}
            {(toggleMenu || largeur > 500) && (
                <ul className="liste">
                    <li className="items">Accueil</li>
                    <li className="items">Services</li>
                    <li className="items">Contact</li>
                </ul>
            )}
            {/* Bouton qui toggle la navbar en mode mobile */}
            <button onClick={toggleNav} className="btn">BTN</button>
        </nav>
    )
}
