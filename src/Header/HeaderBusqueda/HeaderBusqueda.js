import React from 'react';
import {Button} from 'reactstrap';
import './HeaderBusqueda.css';


//Clase Header
const HeaderBusqueda = ()=>{
     
        return(
            <div className="Container">
                <div className="col-md-4">
                    <p className="Frase">¿Qué palabra quieres buscar?</p>
                </div>
                
                <div className="col-md-4">
                    <form method="GET" action="#">
                        <input type="search" placeholder="#" className="BarraBusqueda"/>
                    </form>
                </div>
                
                <div className="col-md-4">
                    <input type="button" value="Buscar" className="MyButton"></input> 
                </div>
                    
            </div>
        )

    
   

}

export default HeaderBusqueda;