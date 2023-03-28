/**
 * Crée une ligne dans la liste
 * @param {Object} props Objet qui contient un id et un texte à afficher
 * @returns un li avec le texte de la todo
 */
export default function Item(props) {
  return (
    <div>
      <li className="border justify-content-between align-items-center d-flex p-2 m-2">
        <div className="p-3">{props.txt}</div>
        <button
          className="btn btn-danger p-2 h-50"
          // On utilise une fonction anonyme qui appel la fonction de suppression envoyé dans le composant parent
          onClick={() => props.delFunc(props.id)}
        >Supprimer</button>
      </li>
    </div>
  )
}
