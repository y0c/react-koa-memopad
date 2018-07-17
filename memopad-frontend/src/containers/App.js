import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { injectGlobal } from 'styled-components'
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from 'components/base/header';
import Footer from 'components/base/footer';
import storage from 'lib/storage';
import Routes from './routes';
import { Loader } from 'components/base/ui';
import * as user from 'store/modules/user';


injectGlobal`
    body {
        padding-top:60px;
    }
`
class App extends Component {
    
    async componentWillMount() {
        const { UserActions } = this.props;
        let accessToken = storage.get('accessToken');


        try {
            if( accessToken ) {
                await UserActions.getMyInfo();
            } else {
                UserActions.logout();
            }
        } catch(e){

        }
    }

    isLoading = () => {
        const { pending } = this.props;
        return Object.keys(pending).filter( k => pending[k] ).length;
    }


    render() {
        let renderComponent = (
            <Routes/>
        );

        if( this.props.loginStatus === '' ) {
            renderComponent = (
                <div></div>
            )
        } 
        
        return (
            <div>
                <Helmet>
                    <title>Memopad</title>
                </Helmet>
                <Header user={this.props.user}/>
                {renderComponent}
                <Footer/>
                <Loader loading={ this.isLoading() }/>
            </div>
        )
    }

}


export default withRouter(connect(
    state => ({
        pending: state.pender.pending,
        loginStatus: state.user.loginStatus,
        user: state.user.info
    }),
    dispatch => ({
        UserActions : bindActionCreators(user, dispatch)
    })
)(App));
