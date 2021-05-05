import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import DogList from './DogList';
import DogDetails from './DogDetails';

class Routes extends Component {
    render() {
        
        const getDog = routeProps => {
            let name = routeProps.match.params.name;
    
            let currentDog = this.props.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    
            return <DogDetails {...routeProps} dog = {currentDog} />
        }
  
        return (
            <Switch>
                <Route exact path = '/dogs' render = {() => <DogList dogs = {this.props.dogs} />} />
                <Route exact path = '/dogs/:name' render={getDog} />
                <Redirect to = '/dogs' />
            </Switch>
        )
    }
}

export default Routes;