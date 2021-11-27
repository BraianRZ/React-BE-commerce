import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="NB">
            <button className="BT">
            <p> Tensiómetros  </p>
            </button>
            <button className="BT">
            <p> Termómetros </p>
            </button>
            <button className="BT">
            <p> Oxímetros </p>
            </button>
            <button className="BT">
            <p> Martillo de Reflejos </p>
            </button>

            <cartWidget/>
            
        </nav> 

        
    )
}

export default NavBar


