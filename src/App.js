import React, {Component} from 'react';
import './App.scss';
import HeaderBusqueda from './Header/HeaderBusqueda/HeaderBusqueda';
import HeaderPalabras from './Header/HeaderPalabras/HeaderPalabras';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 

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
