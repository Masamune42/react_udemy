import React, { useState } from 'react'
import './Modal.css'

export default function Modal() {
    // On déclare le state modal
    const [modal, setModal] = useState(false);

    // Quand la fonction est appelée on toggle modal
    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            {/* Bouton qui fait apparaitre la modal */}
            <button
                onClick={toggleModal}
                className="btn-modal">Open
            </button>
            {/* short-circuit operator : Si modal est à true on affiche la modal */}
            {modal && (
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello modal</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora et minima saepe nemo eius obcaecati unde praesentium voluptas! Accusamus quis neque corrupti dolore! Assumenda error illo placeat labore ipsam!
                                Assumenda ex ab numquam voluptates explicabo velit eligendi odio architecto consequuntur ratione eius placeat, ipsa eaque vel quos eum blanditiis earum ea? Temporibus excepturi eveniet ratione laborum vero mollitia molestiae!
                                Pariatur illo, tempora doloremque quasi quae debitis molestias ea consectetur. Ex molestiae autem quisquam! Aliquid assumenda velit ex nihil quasi voluptates id deleniti veniam distinctio explicabo, voluptatem, quos iure aperiam.
                                Sint, cumque excepturi fuga voluptatibus dolores dicta, accusamus tenetur, ad deserunt beatae officiis est? Aliquid ullam distinctio, accusantium saepe ducimus, numquam id error aspernatur dolorum, perspiciatis similique veniam vero laboriosam.
                            </p>
                            {/* Bouton pour faire disparaitre la modal */}
                            <button
                                onClick={toggleModal}
                                className="close-modal">
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
