import React, {Component} from 'react';
import './App.scss';
// import NavBar from './Navbar/Navbar'
// import HeaderBusqueda from './Header/HeaderBusqueda/HeaderBusqueda';
// import Dropdown from './Dropdown/Dropdown';
import Wikipedia from './Wikipedia/Wikipedia'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wordSearch: [],
      numberAPISelected: undefined,
      apisList: [{
          id: 0,
          name: 'youtube',
          isDropdown: false
        }, {
          id: 1,
          name: 'wikipedia',
          isDropdown: false
        }, {
          id: 2,
          name: 'twitter',
          isDropdown: false
        }, {
          id: 3,
          name: 'Periodicos',
          isDropdown: true,
          dropdownList: [{
            id: 4,
            name: 'periodico 1',
          }, {
            id: 5,
            name: 'periodico 2',
          }, {
            id: 6,
            name: 'periodico 3',
          }]
        }
      ]
    }
  }

  selectAPI = (numberAPISelected) => {
    this.setState({
      numberAPISelected: numberAPISelected
    })
  }

  render() {
    return ( 
      <div className = "App">
        {/* <NavBar />
        <HeaderBusqueda />
        <Dropdown 
          apisList = {this.state.apisList}    
          selectAPI = {this.selectAPI}
          numberAPISelected = {this.state.numberAPISelected}
        /> */}
        <Wikipedia/>
      </div>
    );
  };

}

export default App;