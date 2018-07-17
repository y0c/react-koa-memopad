import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { StyledForm } from 'components/base/ui';
import { SignupForm } from 'components/SignupPage';
import * as auth from 'store/modules/auth';
import styled from 'styled-components';

const CenteredRow = styled(Grid.Row)`
    &&& {
        margin-top:50px;
    }
`
class SignupPage extends Component {

    componentWillMount() {
        const { AuthActions } = this.props;
        AuthActions.init();
    }

    handleSignup = async e => {
        const { AuthActions, form, history } = this.props;

        if( form.password !== form.passwordConfirm ) {
            alert('비밀번호를 한 번 더 확인해주세요');
            return;
        }

        try { 
            await AuthActions.localSignup({
                email : form.email,
                password : form.password,
                username : form.username
            });
            alert('회원가입이 정상적으로 완료되었습니다.');
            history.push('/login');
        } catch (e) {
            AuthActions.formChange({
                email : '',
                password : '',
                passwordConfirm : '',
                username : ''
            })
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
                password,
                passwordConfirm,
                username
            },
            error
        } = this.props;

        return (
            <div>
                <Grid>
                    <CenteredRow centered>
                        <Grid.Column computer={8} tablet={10} mobile={16} >
                            <StyledForm>
                                <SignupForm
                                    onChange={e => this.handleChange(e)}
                                    onSignup={e => this.handleSignup(e)}
                                    email={email}
                                    password={password}
                                    passwordConfirm={passwordConfirm}
                                    username={username}
                                    error={error}
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
        error : state.auth.error
    }),
    (dispatch) => ({
        AuthActions : bindActionCreators(auth, dispatch)
    })
)(SignupPage));