import React, { Component } from "react";
import './SearchedComponent.scss';
import logo from '../img/logo.png'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//NOTA: los metodos() son funciones pero dentro de objetos{}. Por ejemplo, dentro de un array muchas veces usamos metodos como .pop() porque es una funcion
//dentro de un objeto array (typeof array = objeto). En el mismo caso de la array, length es una propiedad, no un metodo.

class SearchedComponent extends Component {
    state = {
        mensajeUsuario: "",
        infoLlamadaApi: [],
        inputPalabra: ""
        // llamadaApiFoto: ""
    };

    showTitles = () => {
        return this.state.infoLlamadaApi.map(elemento => <p> {
            elemento.title
        } </p>);
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
                    console.log(totalFetchUrl)

                    this.setState(
                        //El primer argumento es un objeto en el que vamos a indicar lo que queremos cambiar del estado
                        //jsonInfo.query.search
                        {
                            infoLlamadaApi: [...jsonInfo.query.search],
                            // llamadaApiFoto: jsonInfo.query.pages['186046'].original.source
                        },
                        //El segundo argumento es una funcion call back function. Se va a ejecutar solo cuando el estado se termine de actualizar
                        () => {
                            this.showTitles();
                        }
                    );
                });
        }
    };

    componentDidMount() {
        this.makeApiCall();
    }

    async changeInputText(info) {
        await this.setState({
            inputPalabra: info
        });
    }

    render() {
        console.log("renderizado");
        console.log("Soy una letra:" + this.state.inputPalabra);
        console.log(this.state.infoLlamadaApi);

        return (
            <div className="container-fluid searchedComponent" >
            {/* navbar con logo y menu */}
                <div className="row align_center">
                    <div className="col-6 padding">
                        <img src={logo} className="logo" alt="logo" />
                    </div>
                    <div className="col-6 Menu padding">
                        <FontAwesomeIcon icon={faBars} className="Icono fa-3x" />
                    </div>
                </div>
                {/* input y boton de buscar */}
                <div className="row">
                    <div className="col-12 justify_center">
                         <input onChange={
                        event => this.changeInputText(event.target.value)
                    } type="text" />
                    </div>
                    <div className="col-12 justify_center">
                        <button onClick={
                            event => this.makeApiCall()
                        }>ENTER</button>
                    </div>
                </div> 
                {/* Div con la imagen de fondo + palabra de la busqueda */}
                <div className="row divLlamadaApiFoto">
                    <div className="filtro">
                    <h1 className="palabraLlamadaApiFoto">{this.state.inputPalabra.toUpperCase()}</h1>
                    </div>
                </div>
                {/* Palabras encontradas */}
                <div className="row">
                    {/* <img src={this.state.llamadaApiFoto} alt={this.state.inputPalabra}></img> */}
                    {/* <p>{this.state.llamadaApiFoto}</p> */}
                    <p> {this.showTitles()} </p>
                    {/* <p> {this.state.mensajeUsuario} </p> */}
                </div>
            </div>
        )
    }

}

export default SearchedComponent;