import React from 'react';
import './WikiCard.scss'

function WikiCard(props) {
    return(
        <div className="carta col-11 col-md-5" key={props.indexKey}>
            <h1>{props.titulo}</h1>
            <p>{props.snippet}</p>
            <a href={`https://es.wikipedia.org/wiki/${props.titulo}`} >
            <button>
                 Ir a Wikipedia
            </button>
            </a>
        </div> 
    )
}

export default WikiCard;