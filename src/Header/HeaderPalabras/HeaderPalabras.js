import React from 'react';
import './HeaderPalabras.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const HeaderPalabras = () => {

    let cafe = <FontAwesomeIcon icon={faCoffee} />

    return(
        <div className="Container2">
            <div className="col-3">
                <input type="button" value={<FontAwesomeIcon icon={faCoffee} />} className="MyButton2"/>
            </div>

            <div className="col-3">
                <input type="button" value="" className="MyButton2" />

            </div>

            <div className="col-3">
                <input type="button" value="" className="MyButton2" /> 
            </div>

            <div className="col-3">
                <input type="button" value="" className="MyButton2" />
            </div>

            
        </div>
    )
}

export default HeaderPalabras;