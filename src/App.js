import React, {Component} from 'react';
import { Container} from 'reactstrap';
import './App.scss';
import HeaderBusqueda from './Header/HeaderBusqueda/HeaderBusqueda';
import FuentesInformacion from './FuentesInformacion/FuentesInformacion';
//import Menu from './Navbar/Menu';
import Navbar from './Navbar/Navbar'

 

class App extends Component {
  render(){
     return (
      <div className="App">
        <Container fluid={true}>
          <Navbar/>
          <FuentesInformacion/>
        </Container>
      </div> 
    );
  }
 
}

export default App;
