import React, {Component} from 'react'
import './Navbar.scss'
import Modal from '../Modal/Modal'






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
                                <ul>
                                    <li>TUTORIAL</li>
                                    <li>GITHUB</li>
                                    <li><Modal/></li>
                                </ul>
                            </div>
                            <div>
                            <div id='nav-menu-hamburger'>
                                <span></span>
                            </div>
                            </div>
                    <div className='main-container '></div>
                </div>
                     
            )            
    }

    
}

export default Navbar;

