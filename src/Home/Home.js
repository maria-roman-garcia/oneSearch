import React, { Component } from "react";
import logo from '../img/logo.png';
import './Home.scss';
import { faHeart, faSearch, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import AlertCard from './AlertCard'


//NOTA: los metodos() son funciones pero dentro de objetos{}. Por ejemplo, dentro de un array muchas veces usamos metodos como .pop() porque es una funcion
//dentro de un objeto array (typeof array = objeto). En el mismo caso de la array, length es una propiedad, no un metodo.

class Home extends Component {

    state = {
        inputPalabra: ""
    };

    async changeInputText(info) {
            await this.setState({
                inputPalabra: info.replace(/[^\w\s]/gi, '')
            });
    }

    render() {
        console.log(this.state.inputPalabra)

        return (
            <div className="container-fluid home" >
                <div className="row menu-hamburger">
                    <Navbar />
                </div>
                <div className="row justify_center">
                    < Link to="/" className="row justify_center">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>

                <div className="row justify_center">
                    <input className="inputItem " onChange={
                        event => this.changeInputText(event.target.value)
                    } type="text" placeholder="¿Qué te interesa?" />
                </div>
                <div className="row justify_center">

                    {
                        this.state.inputPalabra === ""
                            ? <AlertCard />
                            : <Link to={"/resultado-busqueda/" + this.state.inputPalabra}>
                                <button type="button">ENTER</button>
                            </Link>
                    }

                </div>

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="row icono justify_center">
                            <FontAwesomeIcon icon={faHeart} className="Icono fa-3x" />
                        </div>
                        <div className="row padding">
                            <p>¡Bienvenid@ a OneSearch! La pagina donde podrás encontrar y comparar información en diferentes fuentes como Wikipedia o Twitter.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row icono justify_center">
                            <FontAwesomeIcon icon={faSearch} className="Icono fa-3x" />
                        </div>
                        <div className="row padding">
                            <p>¿Estás preparad@? Introduce una palabra en el buscador, y preparate para navegar!</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row icono justify_center">
                            <FontAwesomeIcon icon={faLightbulb} className="Icono fa-3x" />
                        </div>
                        <div className="row padding">
                            <p>Estamos en pleno desarrollo. Nos encanta aprender, asi que si tienes buenas ideas no dudes en sugerir nuevos cambios en nuestro Git. (Lo encontrarás en el menu).</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;