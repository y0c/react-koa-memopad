import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { StyledForm } from 'components/base/ui';
import { LoginForm } from 'components/LoginPage';
import styled from 'styled-components';
import * as auth from 'store/modules/auth';
import * as user from 'store/modules/user';
import storage from 'lib/storage';

const CenteredRow = styled(Grid.Row)`
    &&& {
        margin-top:50px;
    }
`


class LoginPage extends Component {

    componentWillMount() {
        const { AuthActions, UserActions } = this.props;
        AuthActions.init();
        UserActions.logout();
    }

    handleLogin = async e => {
        const { AuthActions, UserActions, form, history } = this.props;
        
        try { 
            const { data : { accessToken} } = await AuthActions.localLogin({
                email : form.email,
                password : form.password
            });
            storage.set('accessToken', accessToken);
            await UserActions.getMyInfo();
            history.push('/');
        } catch (e) {
            AuthActions.formChange({ email : '', password : '' });
        }
        // e.preventDefault();
    }
    
    handleChange = e => {
        const { AuthActions, form } = this.props;
        const { name, value } = e.target;
        
        AuthActions.formChange({ 
            ...form,
            [name] : value 
        });
    }

    render() {
        const { 
            form : { 
                email,
                password
            },
            error
        } = this.props;

        return (
            <div>
                <Grid>
                    <CenteredRow centered>
                        <Grid.Column computer={8} tablet={10} mobile={16} >
                            <StyledForm>
                                <LoginForm
                                    onChange={ e => this.handleChange(e) }
                                    onLogin={ e => this.handleLogin(e) }
                                    error={error}
                                    email={email}
                                    password={password}
                                />
                            </StyledForm>
                        </Grid.Column>
                    </CenteredRow>
                </Grid>
            </div>
        )
    }
}


export default withRouter(connect(
    (state) => ({
        form : state.auth.form,
        error : state.auth.error,
        loginResult : state.auth.loginResult
    }),
    (dispatch) => ({
        AuthActions : bindActionCreators(auth, dispatch),
        UserActions : bindActionCreators(user, dispatch)
    })
)(LoginPage));