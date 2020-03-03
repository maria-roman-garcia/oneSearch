import React, {Component} from 'react'
import './Navbar.scss'
import Modal from '../Modal/Modal'
import { Button } from 'reactstrap';


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
                    
                        <div className='nav-menu '>
                            <div className='nav-menu-body hidden'>

                            <Button className="boton" color="info" title="Repositorio en Github de One Search" href={`https://github.com/maria-roman-garcia/oneSearch`} target="_blank" rel="noopener noreferrer">Github</Button>{''}
                            <Modal/>
                            
                            </div>
                            <p id='nav-menu-hamburger'>
                                <span></span>
                            </p>
                        </div>
    )            
    }

    
}

export default Navbar;
