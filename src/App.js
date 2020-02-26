import React, {Component} from 'react';
// import SearchedComponent from './SearchedComponent/SearchedComponent'
// import Home from './Home/Home';
import './App.scss';
import SearchedComponent from './SearchedComponent/SearchedComponent'
import WikiCard from './SearchedComponent/WikiCard'

class App extends React.Component {

  render() {
    
    return ( 
      <div className = "App">
        {/* <Home/> */}
        <SearchedComponent/>
        <WikiCard />
      </div>
    );
  };

}

export default App;