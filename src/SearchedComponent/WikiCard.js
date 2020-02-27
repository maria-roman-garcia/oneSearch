import React from 'react';
import './WikiCard.scss'

function WikiCard(props) {
    return(
        <div className="carta col-11 col-md-5">
            <h1>{props.titulo}</h1>
            <p>{props.snippet}</p>
        </div> 
    )
}

export default WikiCard;