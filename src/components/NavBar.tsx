import * as React from 'react';
import {
    Container,
    Menu
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

class NavBar extends React.Component<{}, {}> {
    public render() {
        return (
            <this.FixedMenu />
        );
    }
    private FixedMenu = () => (
        <Menu
            inverted
            fixed='top'
            size='large'
            borderless
            stackable
        >
            <Container>
                <Menu.Item
                    as={Link}
                    to='/'
                    header
                    content={`Mike's Online Shopping`}
                >
                </Menu.Item>
                <Menu.Item as={Link} to='/browse'>
                    <Menu.Item>Browse</Menu.Item>
                </Menu.Item>
                <Menu.Item as={Link} to='/cart'>
                    <Menu.Item>Cart</Menu.Item>
                </Menu.Item>
                <Menu.Item as={Link} to='/checkout' >
                    <Menu.Item>Checkout</Menu.Item>
                </Menu.Item>
                <Menu.Item as='a' href='https://github.com/Mike-Stupich/shopping-cart-react-redux'>
                    <Menu.Item>Source Code</Menu.Item>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/login' >
                        <Menu.Item>Login</Menu.Item>
                    </Menu.Item>
                    <Menu.Item as={Link} to='/register' >
                        <Menu.Item>Register</Menu.Item>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}

export default NavBar;
