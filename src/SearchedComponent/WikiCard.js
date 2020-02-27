import React from 'react';
import './WikiCard.scss'

function WikiCard(props) {
    return(
        <div className="carta col-11 col-md-5" key={props.indexKey}>
            <h1>{props.titulo}</h1>
            <p>{props.snippet}</p>
            <button>
                 <a href={`https://es.wikipedia.org/wiki/${props.titulo}`}>Ir a Wikipedia</a>
            </button>
        </div> 
    )
}

export default WikiCard;