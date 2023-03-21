import React from "react";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

import AuctionService from "../../services/AuctionService";
import {
    Button,
    Container,
    Header,
    Icon,
    Segment
} from 'semantic-ui-react'

class AuctionComponent extends React.Component {



    constructor(props) {
        super(props);
        window.AuctionComponent = this
        this.state = {
            auctions: []
        }
        this.addAuction = this.addAuction.bind(this);


    }


    viewAuction(id){
        this.props.history.push(`/view-auction/${id}`)
    }

    componentDidMount() {
        AuctionService.getAuctions().then(response => {
            let auctions = response.data
            this.setState({auctions: auctions})
        })
    }

    addAuction(){
        this.props.history.push(`/add-auction`)
    }


    render() {

        return (

            <Container>
                <Header style={{
                    fontSize:  '2em',
                    fontWeight: 'normal',
                    marginBottom: 30,
                    marginTop: 20,
                }}as='h2'  textAlign='center'>
                    Licitatii
                </Header>
                <Button color='violet' onClick={() => this.addAuction()} >Adauga Licitatie</Button>
                    {this.state.auctions.map((auction) => (
                        <div className="ui inverted segment">
                            <Segment secondary key={auction.id} color='violet'>
                                <Header color='blue' as='h4'>{auction.name}</Header>
                                Produs Licitat: {auction.product.name} <br/>
                                Numar Componente: {auction.numberOfProducts} </Segment>
                                { auction.status == 0  && <Header size='small'>Status: activ</Header> }
                                { auction.status == 1  && <Header size='small'>Status: finalizat</Header> }
                            <div className="ui inverted divider"></div>
                            <div>
                                <Button inverted color='purple' icon labelPosition='left' >
                                    Edit
                                </Button>
                                <Button color='teal' icon labelPosition='right' onClick={ () => this.viewAuction(auction.id)}>
                                    Vezi Licitatia
                                    <Icon name='right arrow' />
                                </Button>

                            </div>
                        </div>
                    ))}

            </Container>

        )

}
    }
export default AuctionComponent;