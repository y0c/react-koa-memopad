import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { injectGlobal } from 'styled-components'
import { Link, withRouter } from 'react-router-dom';
import storage from 'lib/storage';
import Routes from './routes';
import Loader from 'components/base/ui/Loader';
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
                <header>
                    <Menu fixed='top' inverted color='blue'>
                        <Container>
                            <Menu.Item>
                                <Link to='/'>
                                    <Icon name='file'/>Memopad
                                </Link>
                            </Menu.Item>

                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Link to='/login'>
                                        <Icon name='lock'/>Login
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='/register'>
                                        <Icon name='signup'/>Signup
                                    </Link>
                                </Menu.Item>
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </header>
            {renderComponent}
            <Loader loading={ this.isLoading() }/>
            </div>
        )
    }

}


export default withRouter(connect(
    state => ({
        pending: state.pender.pending,
        loginStatus: state.user.loginStatus
    }),
    dispatch => ({
        UserActions : bindActionCreators(user, dispatch)
    })
)(App));
