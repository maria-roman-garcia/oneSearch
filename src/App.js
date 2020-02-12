import React, {Component} from 'react';
import './App.scss';
import HeaderBusqueda from './Header/HeaderBusqueda/HeaderBusqueda';
import FuentesInformacion from './FuentesInformacion/FuentesInformacion';
 

class App extends Component {
  render(){
     return (
      <div className="App">
        <FuentesInformacion/>
      </div>
    );
  }
 
}

export default App;
