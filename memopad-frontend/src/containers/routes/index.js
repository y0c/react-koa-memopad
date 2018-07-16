import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MainPage from './MainPage';

class Routes extends Component {
    render(){
        return (
            <Container>
                <Route exact path='/' component={MainPage} />
                <Route path='/login' component={LoginPage} /> 
                <Route path='/signup' component={SignupPage} /> 
            </Container>
        )
    }
}

export default Routes;