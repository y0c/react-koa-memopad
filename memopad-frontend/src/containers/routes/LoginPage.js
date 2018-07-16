import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    Grid, 
    Form, 
    Header, 
    Icon, 
    Button, 
    Message,
    Input
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import * as auth from 'store/modules/auth';
import storage from 'lib/storage';

const StyledForm = styled.div`
    padding: 20px;
    border-radius:3px;
    border: 1px solid #ddd;
`

class LoginPage extends Component {

    handleLogin = async e => {
        const { AuthActions, form, history } = this.props;
        
        try { 
            const { data : { accessToken} } = await AuthActions.localLogin(form);
            storage.set('accessToken', accessToken);
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
                    <Grid.Row centered>
                        <Grid.Column computer={8} tablet={10} mobile={16} >
                            <StyledForm>
                                <Form>
                                    <Header as='h3' textAlign='center'>
                                        <Icon
                                            name='user' 
                                            size='tiny'
                                        />
                                        Login
                                    </Header>          
                                    <Form.Field>
                                        <label>Email</label>
                                        <Input
                                            icon='mail' 
                                            name='email'
                                            iconPosition='left' 
                                            placeholder="Input e-mail address"
                                            onChange={ e => this.handleChange(e) }
                                            value={email}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Password</label>
                                        <Input 
                                            type='password' 
                                            name='password'
                                            icon='lock' 
                                            iconPosition='left' 
                                            placeholder="Input password"
                                            onChange={ e => this.handleChange(e) }
                                            value={password}
                                        />
                                    </Form.Field>
                                    <Message
                                        error
                                        visible={error != ''}
                                        header={error}
                                    />
                                    <Button type='submit' primary onClick={ e => this.handleLogin(e) }>Submit</Button>
                                </Form>
                            </StyledForm>
                        </Grid.Column>
                    </Grid.Row>
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
        AuthActions : bindActionCreators(auth, dispatch)
    })
)(LoginPage));