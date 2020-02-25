import React, { Component } from "react";
import './SearchedComponent.scss';
import logo from '../img/logo.png'

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
            < div className="container-fluid" >
                <div className="row justify_center">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="row justify_center">
                    <input onChange={
                        event => this.changeInputText(event.target.value)
                    } type="text" id="input" />
                </div>
                <div className="row justify_center">
                    <button onClick={
                        event => this.makeApiCall()
                    }>ENTER</button>
                </div>
                <div className="row justify_center">
                    <div className="col-4 justify_center">
                        <p>Primera instruccion</p>
                    </div>
                    <div className="col-4 justify_center">
                        <p>Segunda instruccion</p>
                    </div>
                    <div className="col-4 justify_center">
                        <p>Tercera instruccion</p>
                    </div>
                </div>
                <div className="row">
                    {/* <img src={this.state.llamadaApiFoto} alt={this.state.inputPalabra}></img> */}
                    {/* <p>{this.state.llamadaApiFoto}</p> */}
                    <p> {this.showTitles()} </p>
                </div>
            </div>
            // {/* <p> {this.state.mensajeUsuario} </p> */}
        );
    }

}

export default SearchedComponent;