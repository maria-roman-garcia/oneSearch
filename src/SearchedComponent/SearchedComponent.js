import React, { Component } from "react";
import './SearchedComponent.scss';
import logo from '../img/logo.png'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
// import Routes from '../Routes'
import WikiCard from './WikiCard'

//NOTA: los metodos() son funciones pero dentro de objetos{}. Por ejemplo, dentro de un array muchas veces usamos metodos como .pop() porque es una funcion
//dentro de un objeto array (typeof array = objeto). En el mismo caso de la array, length es una propiedad, no un metodo.

class SearchedComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mensajeUsuario: "",
            infoLlamadaApi: [],
            inputPalabra: this.props.match.params.palabraBuscada,
            llamadaApiFoto: ""
        }
    }

    showItems = () => {
        return this.state.infoLlamadaApi.map(elemento =>
            <div>
                <p>{elemento.title}</p>
                <p>{elemento.snippet}</p>
            </div>
        );
    };

    makeApiCall = () => {

        // https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&titles=casa&prop=pageimages&format=json&piprop=original&origin=*&utf8=&srsearch=casa

        let primeraFetchUrl = "https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&titles=";
        let segundaFetchUrl = "&prop=pageimages&format=json&piprop=original&origin=*&utf8=&srsearch=";

        primeraFetchUrl += this.state.inputPalabra;
        segundaFetchUrl += this.state.inputPalabra;

        let totalFetchUrl = `${primeraFetchUrl}${segundaFetchUrl}`;

        if (this.state.inputPalabra === "") {
            this.setState({
                mensajeUsuario: "Mete una nueva palabra"
            });
        } else {
            this.setState({
                mensajeUsuario: "Resultados:"
            });
            fetch(totalFetchUrl)
                //fetch actua como si fuera una promesa. Con el .then forzamos a que espere a la respuesta y que sea sincrono
                .then(fetchInfo => {
                    //.json() es un metodo que convierte la informacion del argumento (fetchInfo) a formato Json
                    return fetchInfo.json();
                })
                .then(jsonInfo => {

                    const idNumberArray = Object.keys(jsonInfo.query.pages)
                    const idNumber = idNumberArray[0]

                    if (jsonInfo.query.pages[idNumber].original == undefined) {
                        this.setState(
                            //El primer argumento es un objeto en el que vamos a indicar lo que queremos cambiar del estado
                            //jsonInfo.query.search
                            {
                                infoLlamadaApi: [...jsonInfo.query.search],
                                llamadaApiFoto: ""
                            },
                            //El segundo argumento es una funcion call back function. Se va a ejecutar solo cuando el estado se termine de actualizar
                            () => {
                                this.showItems();
                            }
                        );
                    } else {
                        this.setState(
                            //El primer argumento es un objeto en el que vamos a indicar lo que queremos cambiar del estado
                            //jsonInfo.query.search
                            {
                                infoLlamadaApi: [...jsonInfo.query.search],
                                llamadaApiFoto: jsonInfo.query.pages[idNumber].original.source
                            },
                            //El segundo argumento es una funcion call back function. Se va a ejecutar solo cuando el estado se termine de actualizar
                            () => {
                                this.showItems();
                            }
                        );
                    }
                });
        }

    };

    componentDidMount() {
        this.makeApiCall();
    }

    async changeInputText(info) {
        await this.setState({
            inputPalabra: info,
        });
    }

    fotoRenderizada = () => {
        if (this.state.llamadaApiFoto === "") {
            return ('url(https://images.unsplash.com/photo-1573812195421-50a396d17893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)')
        } else {
            return (`url(${this.state.llamadaApiFoto})`)
        }
    }

    render() {
        // console.log("renderizado");
        // console.log("Soy una letra:" + this.state.inputPalabra);
        // console.log(this.state.infoLlamadaApi);
        console.log(this.state.llamadaApiFoto)

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
                        <FontAwesomeIcon icon={faBars} className="Icono fa-3x" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row align_center justify_center">
                            <div className="col-12 col-md-6">
                                <input value={this.state.inputPalabra} onChange={
                                    event => this.changeInputText(event.target.value)
                                } type="text" />
                            </div>
                            <div className="col-12 col-md-6 buttonDiv">
                                <button onClick={
                                    event => this.makeApiCall()
                                }>ENTER</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Div con la imagen de fondo + palabra de la busqueda */}
                <div className="row divLlamadaApiFoto" style={{ backgroundImage: `${this.fotoRenderizada()}` }}>
                    <div className="filtro">
                        <div className="filtroPalabra justify_center align_center">
                            <h1 className="palabraLlamadaApiFoto">{this.state.inputPalabra.toUpperCase()}</h1>
                        </div>
                        <div className="row filtroMenu">
                            <div className="col-4 justify_center selected align_center">
                                <p>Wikipedia</p>
                            </div>
                            <div className="col-4 justify_center align_center">
                                <p>Twitter</p>
                            </div>
                            <div className="col-4 justify_center align_center">
                                <p>Otra</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Palabras encontradas */}
                <div className="row">
                    <p> {this.showItems()} </p>
                </div>

                <div className="row justify_center">
                    <WikiCard />
                    <WikiCard />
                </div>
            </div>
        )
    }

}

export default SearchedComponent;