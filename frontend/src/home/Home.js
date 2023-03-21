import React, {Component} from 'react';

import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react'

export default class Home extends Component{
    constructor(props) {
        super(props);
        window.homeComponent = this
    }

    render() {
        return (

            <Segment
                inverted
                textAlign='center'
                style={{minHeight: 550, padding: '1em 0em'}}
                vertical
            >
                <Container text>
                    <Header
                        as='h1'
                        content='Propune orice oferta'
                        inverted
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '3em',
                        }}
                    />
                    <Header
                        as='h2'
                        content='La doar un click distanta'
                        inverted
                        style={{
                            fontSize: '1.7em',
                            fontWeight: 'normal',
                            marginTop: '1.5em',
                        }}
                    />
                    <Button primary size='huge'>
                        Vezi licitatii
                        <Icon name='right arrow'/>
                    </Button>
                </Container>
            </Segment>
        )
    }
}






