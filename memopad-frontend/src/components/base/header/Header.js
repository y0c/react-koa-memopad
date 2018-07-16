import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Header = ({user}) => {
    let menu = (
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
    );

    if( user.email ){
        menu = (
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Link to='/'>
                        <Icon name='user'/>{user.username}
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/logout'>
                        <Icon name='sign out alternate'/>Logout
                    </Link>
                </Menu.Item>
            </Menu.Menu>
        )
    }
    return (
        <header>
            <Menu fixed='top' inverted color='blue'>
                <Container>
                    <Menu.Item>
                        <Link to='/'>
                            <Icon name='file'/>Memopad
                        </Link>
                    </Menu.Item>

                    {menu}
                </Container>
            </Menu>
        </header>
    )
}

export default Header;