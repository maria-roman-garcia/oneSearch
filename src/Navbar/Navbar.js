import React, {Component} from 'react'
import './Navbar.scss'




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
                                <li>COLABORA</li>
                                <li>SUGERENCIAS</li>
                            </ul>
                            </div>
                            <p id='nav-menu-hamburger'>
                                <span></span>
                            </p>
                        </div>
    )            
    }

    
}

export default Navbar;
