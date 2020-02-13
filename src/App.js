import React, {Component} from 'react';
import './App.scss';
import HeaderBusqueda from './Header/HeaderBusqueda/HeaderBusqueda';
<<<<<<< HEAD
import FuentesInformacion from './FuentesInformacion/FuentesInformacion';
//import Menu from './Navbar/Menu';
import Navbar from './Navbar/Navbar'

=======
import HeaderPalabras from './Header/HeaderPalabras/HeaderPalabras';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
>>>>>>> 76298aef66838e5308421c4eec37ec1d60c289ec
 

class App extends Component {
  render(){
     return (
      <div className="App">
        <HeaderBusqueda />
         <HeaderPalabras />
       
      </div>
    );
  }
 
}

export default App;
