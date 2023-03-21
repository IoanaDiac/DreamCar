import {withRouter} from 'react-router-dom';
import React, { Component } from 'react'
import { useHistory } from "react-router-dom";
import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Segment
} from 'semantic-ui-react'


class AppBar extends Component {
    state = { activeItem: 'home' }

    constructor(props) {
        super(props)
        this.nextPath = this.nextPath.bind(this);
        window.AuctionView = this
        this.state = {
        }}

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        const { fixed } = this.state
        const { activeItem } = this.state

        return (
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 100, padding: '1em 0em' }}
                        vertical
                    >
                        <div>
                            <Header style={{
                                fontSize:  '5em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: 0,
                            }} inverted color='purple' as='h1'><Icon name='car' size='huge' inverted color='purple'/>DreamCar</Header>
                        </div>

                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>

                                <Menu.Item
                                    name='home'
                                    active={activeItem === 'home'}
                                    onClick={ () => this.toHome()}
                                />
                                <Menu.Item
                                    name='Licitatii'
                                    active={activeItem === 'messages'}
                                    onClick={() => this.nextPath('/auctions')}
                                />
                                <Menu.Item
                                    name='Useri'
                                    active={activeItem === 'friends'}
                                    onClick={ () => this.toUsers()}
                                />

                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>


        )
    }
}
export default AppBar
