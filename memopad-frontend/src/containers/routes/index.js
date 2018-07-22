import React, { Component }  from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PrivateRoute from 'components/hoc/PrivateRoute';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MainPage from './MainPage';
import LogoutPage from './LogoutPage';
import { PostFormPage, PostViewPage } from './post';
import styled from 'styled-components';

const MainContainer = styled(Container)`
    min-height: calc(100vh - 134px)
` 
class Routes extends Component {
    render(){
        return (
            <MainContainer>
                <Switch>
                    <PrivateRoute 
                        exact 
                        path='/' 
                        component={MainPage} 
                        user={this.props.user}
                    />
                    <Route exact path='/login' component={LoginPage} /> 
                    <Route exact path='/signup' component={SignupPage} /> 
                    <Route exact path='/logout' component={LogoutPage} />
                    <Route exact path='/post/form' component={PostFormPage} />
                    <Route exact path='/post/:id' component={PostViewPage} />
                </Switch>
            </MainContainer>
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