import React, {Component} from 'react';
import { Container, Row} from 'reactstrap';
import './App.scss';
//import Menu from './Navbar/Menu';
import Navbar from './Navbar/Navbar'




 

class App extends Component {
  render(){
     return (
      <Container fluid={true}>
        <Navbar />
    </Container>
      
    );
  }
 
}

export default App;
