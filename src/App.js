import React, {Component} from 'react';
import './App.css';
import HeaderBusqueda from './Header/HeaderBusqueda/HeaderBusqueda';
import HeaderPalabras from './Header/HeaderPalabras/HeaderPalabras';
import NavBar from './Navbar/Navbar';


class App extends Component {
  render(){
     return (
      <div className="App">
        <NavBar />
        <HeaderBusqueda />
        
        
       
      </div>
    );
  }

}

export default App;
