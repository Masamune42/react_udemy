import React from 'react'

export default function Item() {
  return (
    <div>
      <li className="border justify-content-between align-items-center d-flex p-2 m-2">
        <div className="p-3">Txt</div>
        <button className="btn btn-danger p-2 h-50">Supprimer</button>
      </li>
    </div>
  )
}
