import React, {Component} from 'react';
// import SearchedComponent from './SearchedComponent/SearchedComponent'
// import Home from './Home/Home';
import './App.scss';
import SearchedComponent from './SearchedComponent/SearchedComponent'

class App extends React.Component {

  render() {
    
    return ( 
      <div className = "App">
        {/* <Home/> */}
        <SearchedComponent/>
      </div>
    );
  };

}

export default App;