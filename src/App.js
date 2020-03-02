import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import CardItem from './Modal/CardItem'

import Routes from './Routes'


class App extends React.Component {

  render() {

    return (
      <div className = "App">
        {/* <Modal/> */}
        
        <Router>
          <Routes/>
        </Router>
      </div>
    );
  };

}

export default App;