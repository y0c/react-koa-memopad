import React from 'react';
import { 
    Form,
    Header, 
    Icon, 
    Input, 
    Message, 
    Button 
} from 'semantic-ui-react';

const LoginForm = ({ 
    email, 
    password, 
    error, 
    onChange, 
    onLogin
}) => {
    return (
        <Form onSubmit={onLogin}>
            <Header as='h3' textAlign='center'>
                <Icon
                    name='lock' 
                    size='tiny'
                    />
                    로그인
                </Header>          
                <Form.Field>
                    <label>이메일</label>
                    <Input
                        icon='mail' 
                        name='email'
                        iconPosition='left' 
                        placeholder="Input e-mail address"
                        onChange={onChange}
                        value={email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>비밀번호</label>
                    <Input 
                        type='password' 
                        name='password'
                        icon='lock' 
                        iconPosition='left' 
                        placeholder="Input password"
                        onChange={onChange}
                        value={password}
                    />
                </Form.Field>
                <Message
                    error
                    visible={error != ''}
                    header={error}
                />
                <Form.Field>
                    <Button type='submit' color='teal' fluid>
                        <Icon name='mail' />이메일로 로그인
                    </Button>
                </Form.Field>
                <Form.Field>
                    <Button color='facebook' fluid>
                        <Icon name='facebook' /> Facebook으로 로그인
                    </Button>
                </Form.Field>
                <Form.Field>
                    <Button color='google plus' fluid>
                        <Icon name='google plus' /> Google으로 로그인
                    </Button>
                </Form.Field>
        </Form>
    )
}

export default LoginForm;