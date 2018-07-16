import React, { Component }  from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PrivateRoute from 'components/hoc/PrivateRoute';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MainPage from './MainPage';

class Routes extends Component {
    render(){
        return (
            <Container>
                <Switch>
                    <PrivateRoute 
                        exact 
                        path='/' 
                        component={MainPage} 
                        user={this.props.user}
                    />
                    <Route path='/login' component={LoginPage} /> 
                    <Route path='/signup' component={SignupPage} /> 
                </Switch>
            </Container>
        )
    }
}

export default withRouter(connect(
    state => ({
        user : state.user.info
    }),
    dispatch => ({

    })
)(Routes));