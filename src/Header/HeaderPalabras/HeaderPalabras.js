import React from 'react';
import './HeaderPalabras.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const HeaderPalabras = () => {

    let cafe = <FontAwesomeIcon icon={faCoffee} />

    return(
        <div className="row" id="HeaderPalabras">
            <div className="Col-md-3">
                <input type="button" value="" className="MyButton2" />
            
            </div>

            <div className="Col-md-3">
                <input type="button" value="" className="MyButton2" />

            </div>

            <div className="Col-md-3">
                
            </div>
            
        </div>
    )
}

export default HeaderPalabras;