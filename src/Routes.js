import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home'
import SearchedComponent from './SearchedComponent/SearchedComponent';

const Routes = () => {
    return(
        <div className="container-fluid">
            <Route path="/" exact component={Home} />
            <Route path="/resultado-busqueda/:palabraBuscada" component={SearchedComponent} />
        </div>
    )
}

export default Routes;