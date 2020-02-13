import React from 'react';
import {Button} from 'reactstrap';
import './HeaderBusqueda.css';


//Clase Header
const HeaderBusqueda = ()=>{
     
        return(
            <div className="row" id="HeaderBusqueda">
                <div className="col-12 col-md-4 justify-content">
                    <p className="Frase">¿Qué palabra quieres buscar?</p>
                </div>
                
                <div className="col-12 col-md-4 justify-content">
                    
                    <input type="search" placeholder="#" className="BarraBusqueda"/>
                    
                </div>
                
                <div className="col-12 col-md-4 justify-content">
                    <button className="MyButton" onclick="myFunction()">Buscar</button>
                </div>
                    
            </div>
        )

    
   

}

export default HeaderBusqueda;