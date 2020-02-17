import React from 'react';
import {Button} from 'reactstrap';
import './HeaderBusqueda.css';
import FontAwesome from 'react-fontawesome';
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



//Clase Header
const HeaderBusqueda = ()=>{
     
        return(
            <div className="row" id="HeaderBusqueda">
                <div className="col-12 col-md-4 justify-content">
                    <p className="Frase">¿Qué palabra quieres buscar?</p>
                </div>
                
                <div className="col-12 col-md-4 justify-content">
                    
                    <input type="search" className="BarraBusqueda"/>
                    <FontAwesomeIcon icon={faHashtag} className="Icono" />
                </div>
                
                <div className="col-12 col-md-4 justify-content">
                    <button className="MyButton" onClick="myFunction()">Buscar</button>
                </div>
                
            </div>
        )
    }

        export default HeaderBusqueda;

        
        
        // class Question extends React.Component {
        //     render() {
        //         return <h3> Lets go for a <FaBeer />? </h3>
        //     }
        // }
            
            

