import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './FuentesInformacion.scss'

const FuentesInformacion = () => {


    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    let myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    }
    

    return(
        <div className="container">
                <div class="row">
                    {/* Menu para ordenador */}
                    <div class="d-none d-md-block col-md-3">Twitter</div>
                    <div class="d-none d-md-block col-md-3">Facebook</div>
                    <div class="d-none d-md-block col-md-3">Periodicos</div>
                    <div class="d-none d-md-block col-md-3">Youtube</div>
                    {/* Menu para movil */}
                    <div class="col-6 d-md-none">

                        <div class="dropdown">
                            <button onClick={()=>this.myFunction()} class="dropbtn">Dropdown</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-6 d-md-none">
                        Seleccion
                    </div>
                </div>
        </div>
       
    );
}


export default FuentesInformacion;