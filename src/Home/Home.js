import React, {Component} from "react";
import logo from '../img/logo.png'

//NOTA: los metodos() son funciones pero dentro de objetos{}. Por ejemplo, dentro de un array muchas veces usamos metodos como .pop() porque es una funcion
//dentro de un objeto array (typeof array = objeto). En el mismo caso de la array, length es una propiedad, no un metodo.

class Home extends Component {
    state = {
        mensajeUsuario: "",
        infoLlamadaApi: [],
        inputPalabra: ""
        // llamadaApiFoto: ""
    };

    
    async changeInputText(info) {
        await this.setState({
             inputPalabra: info
        });
        }

        render() {
            
            return ( 
                    < div className = "container-fluid" >
                        <div className="row justify_center">
                            <img src={logo} className="logo" alt="logo"/>
                        </div>
                        <div className="row justify_center">
                            <input onChange = {
                            event => this.changeInputText(event.target.value)
                            }type = "text" id="input"/>
                        </div>
                        <div className="row justify_center">
                            <button onClick = {
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
                    </div>
            );
        }

    }

    export default Home;