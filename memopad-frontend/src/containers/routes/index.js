import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MainPage from './MainPage';

class Routes extends Component {
    render(){
        return (
            <Container>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/login' component={LoginPage} /> 
                    <Route path='/signup' component={SignupPage} /> 
                </Switch>
            </Container>
        )
    }
}

export default Routes;