import React, { Component } from "react";
import './SearchedComponent.scss';
import logo from '../img/logo.png'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
// import Routes from '../Routes'
import WikiCard from './WikiCard'
import Navbar from '../Navbar/Navbar'
import Twitter from "./Twitter";
import Otros from './Otros'

//NOTA: los metodos() son funciones pero dentro de objetos{}. Por ejemplo, dentro de un array muchas veces usamos metodos como .pop() porque es una funcion
//dentro de un objeto array (typeof array = objeto). En el mismo caso de la array, length es una propiedad, no un metodo.

class SearchedComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputPalabraEscribiendo: this.props.match.params.palabraBuscada,
            inputPalabraBuscar: this.props.match.params.palabraBuscada,
            // wikipedia foto
            llamadaApiFoto: "",
            // menu wiki twitter y otro
            namesApisList: [{
                id: 0,
                name: 'Wikipedia',
            }, {
                id: 1,
                name: 'Twitter',
            }, {
                id: 2,
                name: 'Otro',
            }],
            idApiSelected: 0
        }
    }

    makeApiCallWikipedia = (palabraBuscarOpcional) => {

        // https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&titles=casa&prop=pageimages&format=json&piprop=original&origin=*&utf8=&srsearch=casa

        let primeraFetchUrl = "https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&titles=";
        let segundaFetchUrl = "&prop=pageimages&format=json&piprop=original&origin=*&utf8=&srsearch=";

        primeraFetchUrl += palabraBuscarOpcional || this.state.inputPalabraBuscar;
        segundaFetchUrl += palabraBuscarOpcional || this.state.inputPalabraBuscar;

        let totalFetchUrl = `${primeraFetchUrl}${segundaFetchUrl}`;

        fetch(totalFetchUrl)
            //fetch actua como si fuera una promesa. Con el .then forzamos a que espere a la respuesta y que sea sincrono
            .then(fetchInfo => {
                //.json() es un metodo que convierte la informacion del argumento (fetchInfo) a formato Json
                return fetchInfo.json();
            })
            .then(jsonInfo => {

                const idNumber = Object.keys(jsonInfo.query.pages)[0]
                this.setState(

                    //Cogemos e id de const idNumber, y si es undefined nos lo mete en un objeto vacio.(porque podemos hacer {}.propiedad pero no undefined.propiedad ...que da error) Como resultado final, si es undefined nos carga una imagen por defecto.
                    //
                    {
                        inputPalabraBuscar: palabraBuscarOpcional || this.state.inputPalabraEscribiendo,
                        llamadaApiFoto: (((jsonInfo.query.pages[idNumber] || {}).original || {}).source || 'https://images.unsplash.com/photo-1573812195421-50a396d17893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
                    }
                );
            });
    };

    componentDidMount() {
        this.makeApiCallWikipedia();
    }

    async changeInputText(info) {
        await this.setState({
            inputPalabraEscribiendo: info,
        });
    }

    // en funcion de que id del menu twitter wiki...este seleccionado se muestra una cosa u otra
    renderSwitch = () => {
        switch (this.state.idApiSelected) {
            case 0:
                return (
                    // Palabras encontradas Wikipedia.
                    <div className="row justify_center">
                        <WikiCard inputPalabraBuscar={this.state.inputPalabraBuscar} />
                    </div>
                )
            case 1:
                return (
                    //Twitter.
                    <div className="row justify_center">
                        <Twitter inputPalabraBuscar={this.state.inputPalabraBuscar} />
                    </div>
                )
            case 2:
                return (
                    //Twitter.
                    <div className="row justify_center">
                        <Otros />
                    </div>
                )

            default: return <p>No hay resultados</p>
        }
    }

    render() {

        // console.log(this.state.llamadaApiFoto)

        return (
            // Navbar

            <div className="container-fluid searchedComponent" >
                <div className="row navBar">
                    <div className="col-6 col-md-3">
                        <Link to="/">
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="col-6 col-md-3 order-md-3 hamburgerDiv">
                        {/* <FontAwesomeIcon icon={faBars} className="Icono fa-3x" /> */}
                        <Navbar />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row align_center justify_center">
                            <div className="col-12 col-md-6">
                                <input className="inputItem" value={this.state.inputPalabraEscribiendo} onChange={
                                    event => this.changeInputText(event.target.value)
                                } type="text" />
                            </div>
                            <div className="col-12 col-md-6 buttonDiv">
                                <Link to={"/resultado-busqueda/" + this.state.inputPalabraEscribiendo}>
                                    <button onClick={
                                        event => this.makeApiCallWikipedia(this.state.inputPalabraEscribiendo)
                                    }>BUSCAR</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Div con la imagen de fondo + palabra de la busqueda y el menu de las fuentes de informacion */}
                <div className="row divLlamadaApiFoto" style={{ backgroundImage: `url(${this.state.llamadaApiFoto})` }}>
                    <div className="filtro">
                        <div className="filtroPalabra justify_center align_center">
                            <h1 className="palabraLlamadaApiFoto">{this.state.inputPalabraBuscar.toUpperCase()}</h1>
                        </div>
                        {/* Menu. Hacemos map para pintar cada elemento de la propiedad namesApisList del state */}
                        <div className="row filtroMenu">
                            {this.state.namesApisList.map(e => {
                                // el que este seleccionado le añadimos la clase .selected
                                const classname = "col-4 justify_center align_center" + (this.state.idApiSelected === e.id ? " selected" : "");
                                return (
                                    <div className={classname} onClick={() => this.setState({
                                        idApiSelected: e.id
                                    })}>
                                        <p> {e.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div>
                    {this.renderSwitch()}
                </div>
            </div>
        )
    }

}

export default SearchedComponent;