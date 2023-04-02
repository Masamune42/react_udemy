import { useEffect, useRef, useState } from "react";
import "./Accord.css";
import Chevron from "./chevron-en-bas.svg";

export default function Accord() {

    // State pour toggle
    const [toggle, setToggle] = useState(false);
    // State pour récupérer la hauteur de l'accordéon
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    }

    // useRef() pour récupérer la hauteur du bloc de texte de l'accordéon
    const refHeight = useRef();

    // A l'affichage du composant, on récupère la hauteur de l'élément (accordéon qui varie suivant la hauteur du texte) sur lequel on a mis heightEl en ref
    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    return (
        <div className="accord">
            <div onClick={toggleState} className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron down" />
            </div>

            {/* Si on toggle, on ajoute la class animation pour afficher le bloc */}
            <div ref={refHeight} className={toggle ? 'accord-toggle animated' : 'accord-toggle'} style={{ height: toggle ? `${heightEl}` : '0' }} >
                {/* aria-hidden pour l'accessibilité pour les lecteurs d'écran */}
                <p aria-hidden={toggle ? "true" : "false"}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum veritatis dolore cupiditate quam inventore suscipit sed amet quisquam unde a! Fugiat natus officia id mollitia tenetur at cumque voluptas quam.
                </p>
            </div>
        </div>
    )
}
