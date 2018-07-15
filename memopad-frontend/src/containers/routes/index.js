import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MainPage from './MainPage';

class Routes extends Component {
    render(){
        return (
            <div>
                <Route exact path='/' component={MainPage} />
                <Route path='/login' component={LoginPage} /> 
                <Route path='/signup' component={SignupPage} /> 
            </div>
        )
    }
}

export default Routes;