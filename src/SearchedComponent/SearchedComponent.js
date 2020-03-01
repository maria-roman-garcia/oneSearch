import React, { Component } from "react";
import './SearchedComponent.scss';
import logo from '../img/logo.png'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
// import Routes from '../Routes'
import WikiCard from './WikiCard'
import Navbar from '../Navbar/Navbar'

//NOTA: los metodos() son funciones pero dentro de objetos{}. Por ejemplo, dentro de un array muchas veces usamos metodos como .pop() porque es una funcion
//dentro de un objeto array (typeof array = objeto). En el mismo caso de la array, length es una propiedad, no un metodo.

class SearchedComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // wikipedia
            infoLlamadaApi: [],
            inputPalabra: this.props.match.params.palabraBuscada,
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



    showItemsWikipedia = () => {
        return this.state.infoLlamadaApi.map((elemento, index) =>
            <WikiCard
                indexKey={index}
                titulo={elemento.title}
                snippet={elemento.snippet.replace(/<span class=|"searchmatch|">/g, '').replace(/<\/span>/g, '')} />
        );
    };

    makeApiCallWikipedia = () => {

        // https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&titles=casa&prop=pageimages&format=json&piprop=original&origin=*&utf8=&srsearch=casa

        let primeraFetchUrl = "https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&titles=";
        let segundaFetchUrl = "&prop=pageimages&format=json&piprop=original&origin=*&utf8=&srsearch=";

        primeraFetchUrl += this.state.inputPalabra;
        segundaFetchUrl += this.state.inputPalabra;

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
                    //El primer argumento es un objeto en el que vamos a indicar lo que queremos cambiar del estado
                    //jsonInfo.query.search
                    {
                        infoLlamadaApi: [...jsonInfo.query.search],
                        llamadaApiFoto: (((jsonInfo.query.pages[idNumber] || {}).original || {}).source || 'https://images.unsplash.com/photo-1573812195421-50a396d17893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
                    },
                    //El segundo argumento es una funcion call back function. Se va a ejecutar solo cuando el estado se termine de actualizar
                    () => {
                        this.showItemsWikipedia();
                    }
                );
            });
    };

    componentDidMount() {
        this.makeApiCallWikipedia();
    }

    async changeInputText(info) {
        await this.setState({
            inputPalabra: info,
        });
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
                        {/* <FontAwesomeIcon icon={faBars} className="Icono fa-3x" /> */}
                        <Navbar />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row align_center justify_center">
                            <div className="col-12 col-md-6">
                                <input className="inputItem" value={this.state.inputPalabra} onChange={
                                    event => this.changeInputText(event.target.value)
                                } type="text" />
                            </div>
                            <div className="col-12 col-md-6 buttonDiv">
                                <button onClick={
                                    event => this.makeApiCallWikipedia()
                                }>ENTER</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Div con la imagen de fondo + palabra de la busqueda y el menu de las fuentes de informacion */}
                <div className="row divLlamadaApiFoto" style={{ backgroundImage: `url(${this.state.llamadaApiFoto})` }}>
                    <div className="filtro">
                        <div className="filtroPalabra justify_center align_center">
                            <h1 className="palabraLlamadaApiFoto">{this.state.inputPalabra.toUpperCase()}</h1>
                        </div>
                        {/* Menu. Hacemos map para pintar cada elemento del state */}
                        <div className="row filtroMenu">
                            {this.state.namesApisList.map(e => {
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

                {/* Palabras encontradas Twitter */}
                <div className="row justify_center">
                    {this.showItemsWikipedia()}
                </div>
            </div>
        )
    }

}

export default SearchedComponent;