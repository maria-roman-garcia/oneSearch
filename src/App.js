import React, {Component} from 'react';
import './App.scss';
import HeaderBusqueda from './Header/HeaderBusqueda/HeaderBusqueda';
 

class App extends Component {
  render(){
     return (
      <div className="App">
        <HeaderBusqueda />
      </div>
    );
  }
 
}

export default App;
