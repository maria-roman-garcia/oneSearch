import React, {Component} from 'react'
import { Row, Col } from 'reactstrap';
import './Navbar.scss'
import logo from "./logo.png"




class Navbar extends Component {

    componentDidMount(){
        document.getElementById('nav-menu-hamburger').addEventListener('click', (event)=>{
                event.preventDefault();
                document.getElementById('nav-menu-hamburger').classList.toggle('active')
                document.getElementsByClassName('nav-menu-body')[0].classList.toggle('hidden')
            })        
    }

    render(){


            return(
                <Row className="rowNavbar">
                    <Col xs="6" md="6">
                    <img src={logo} className="logo" alt="logo" />
                    
                        <div className='nav-menu '>
                           {/*  <div className='nav-menu-body hidden'>
                            <ul>
                                <li>TUTORIAL</li>
                                <li>COLABORA</li>
                                <li>SUGERENCIAS</li>
                            </ul>
                            </div> */}
                            <div>
                            <p id='nav-menu-hamburger'>
                                <span></span>
                            </p>
                            </div>
                        </div>
                        {/* <div className='main-container '></div> */}
                    </Col>
                    
                </Row>        
            )            
    }

    
}

export default Navbar;

