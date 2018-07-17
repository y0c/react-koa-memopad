import React from 'react';
import {
    Form,
    Icon,
    Input,
    Header,
    Message,
    Button
} from 'semantic-ui-react';

const SignupForm = ({
    email,
    password,
    passwordConfirm,
    username,
    onChange,
    onSignup,
    error
}) => {
    return (
        <Form onSubmit={onSignup}>
            <Header as='h3' textAlign='center'>
                <Icon
                    name='signup' 
                    size='tiny'
                />
                회원가입
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
            <Form.Field>
                <label>비밀번호 확인</label>
                <Input 
                    type='password' 
                    name='passwordConfirm'
                    icon='lock' 
                    iconPosition='left' 
                    placeholder="Input password again"
                    onChange={onChange}
                    value={passwordConfirm}
                />
            </Form.Field>
            <Form.Field>
                <label>유저이름</label>
                <Input
                    icon='user' 
                    name='username'
                    iconPosition='left' 
                    placeholder="Input your name"
                    onChange={onChange}
                    value={username}
                />
            </Form.Field>
            <Message
                error
                visible={error != ''}
                header={error}
            />
            <Button type='submit' color='teal' fluid ><Icon name='signup'/>가입하기</Button>
        </Form>
    )
}

export default SignupForm;