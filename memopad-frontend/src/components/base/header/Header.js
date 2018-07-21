import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const Header = ({user}) => {
    let menu = (
        <Menu.Menu position='right'>
            <Menu.Item as={NavLink} exact to='/login'>
                <Icon name='lock'/>로그인
            </Menu.Item>
            <Menu.Item as={NavLink} exact to='/signup'>
                <Icon name='signup'/>회원가입
            </Menu.Item>
        </Menu.Menu>
    );

    if( user.email ){
        menu = (
            <Menu.Menu position='right'>
                <Menu.Item as={NavLink} exact to='/my'>
                    <Icon name='user'/>{user.username}
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/logout'>
                    <Icon name='sign out alternate'/>로그아웃
                </Menu.Item>
            </Menu.Menu>
        )
    }
    return (
        <header>
            <Menu fixed='top' inverted color='blue'>
                <Container>
                    <Menu.Item as={NavLink}  exact to='/'>
                        <Icon name='file'/>Memopad
                    </Menu.Item>
                    {menu}
                </Container>
            </Menu>
        </header>
    )
}

export default Header;