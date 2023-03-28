import { useState } from "react";
import Item from './Item';
// Librairie qui permet de générer un uid au hasard
import { v4 as uuidv4 } from 'uuid';

/**
 * Crée un formulaire et la Todo list
 * @returns Un formulaire de todo à ajouter et la todo list
 */
export default function Form() {

    // On crée la todo list
    const [dataArr, setDataArr] = useState([
        { txt: "Promener le chien", id: uuidv4() },
        { txt: "Sport", id: uuidv4() },
        { txt: "Coder avec React", id: uuidv4() },
    ])
    // On crée un state pour l'input (1 state / input) initialisé à vide
    const [stateInput, setStateInput] = useState('');

    // Permet de supprimer un élément par son id
    const deleteElement = id => {
        // On crée un tableau à partir de celui actuel que l'on filtre pour garder uniquement les id différent de celui sur lequel on a cliqué
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        // On changé l'état de la todo list avec le nouveau tableau filtré
        setDataArr(filteredState);
    }

    const addTodo = e => {
        // On prévient l'actualisation de la page
        e.preventDefault();
        // On fait une copie du tableau dans un nouveau identique (on ne modifie JAMAIS le tableau directement)
        const newArr = [...dataArr];
        // On crée un nouvel objet qui va contenir la nouvelle todo
        const newTodo = {};
        // On rempli le nouvel objet
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();
        // On ajoute la nouvelle todo au tableau des todo
        newArr.push(newTodo);
        // On change le state avec le nouveau tableau
        setDataArr(newArr);
        // On réinitialise l'input à vide
        setStateInput('');
    }

    // Fonction qui change stateInput à chaque fois qu'on rentre des informations
    const linkedInput = e => {
        setStateInput(e);
    }

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            {/* On crée un formulaire avec un onSubmit sur addTodo() qui va gérer l'ajout */}
            <form onSubmit={addTodo} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">
                    Chose à faire
                </label>
                <input
                    // Pour le Two-way binding qui permet de changer la valeur après avoir submit via la fonction addTodo
                    value={stateInput}
                    // On appelle la fonction linkedInput() quand on change l'input
                    onInput={e => linkedInput(e.target.value)}
                    type="text"
                    className="form-control"
                    id="todo" />
                <button className="btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à faire</h2>
            <ul className="list-group">
                {/* On retourne la liste d'Item = chaque ligne de la todo */}
                {dataArr.map((item) => {
                    return (
                        <Item
                            txt={item.txt}
                            // On crée une clé différente pour chaque élément, idem pour l'id
                            key={item.id}
                            id={item.id}
                            // On passe la fonction pour supprimer un id
                            delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    )
}