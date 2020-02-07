import React from 'react';
//Clase Header
const HeaderBusqueda = ()=>{
     
        return(
            <div className="Row">
                
                <div className="Col-md-4">
                    <form method="GET" action="#">
                        <input type="search" />
                    </form>
                </div>
    
                <div className="Col-md-4">
                    <input type="button" value="Buscar"/>
                </div>
        
            </div>
        )

    
   

}

export default HeaderBusqueda;