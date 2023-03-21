import React from 'react'
import AuctionService from "../../services/AuctionService";
import OfferService from "../../services/OfferService";
import {Button, Container, Header, Icon, Segment, Table, List} from "semantic-ui-react";
import OfferAdd from "./OfferAddModal";

import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import auctionComponent from "./AuctionComponent";

class AuctionView extends React.Component {

    constructor(props) {
        super(props)
        window.AuctionView = this
        this.state = {
            id: this.props.match.params.id,
            auction: {},
            offers: []
    }
        this.addOffer = this.addOffer.bind(this);}

    componentDidMount(){
        AuctionService.getAuctionById(this.state.id).then( res => {
            this.setState({auction: res.data});
        })
        OfferService.getOffers().then(response => {
            let offers = response.data
            this.setState({offers: this.filterOffers(offers, this.state.auction.id)})
        })
    }

    handleRefresh = () => {
        OfferService.getOffers().then(response => {
            let offers = response.data
            this.setState({offers: offers})
        })
    }

    filterOffers(offers, id ){
        return offers.filter((offer) => {
            return offer.auction.id === id})
    }

    addOffer(){
        this.props.history.push(`/add-offer/${this.state.id}`)
    }


    render() {
        return (
        <Container>


            <Segment  color='violet'>
                <Header style={{
                    fontSize:  '2em',
                    fontWeight: 'normal',
                    marginBottom: 30,
                    marginTop: 20,
                }}as='h2'  textAlign='center'>
                    Licitatia: {this.state.auction.name}
                </Header>
                Componenta pentru care se liciteaza: <br/>
                <br/>
                <br/>
                Pretul Target per Componenta (RON): {this.state.auction.targetPricePerProduct} <br/>
                Data de expirare a licitatiei: {this.state.auction.expirationDate}</Segment>
             { this.state.auction.status ==0  &&
                 <Button color='violet' onClick={() => this.addOffer()} >Adauga Oferta</Button>
             }

        <Table singleLine color='violet'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>Companie</Table.HeaderCell>
                    <Table.HeaderCell>Oferta pret/bucata</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {this.state.offers.map((offer) => (
                    <Table.Row>
                        <Table.Cell>{offer.user.username}</Table.Cell>
                        <Table.Cell>{offer.user.company}</Table.Cell>
                        <Table.Cell>{offer.pricePerProduct}</Table.Cell>
                        <Table.Cell>{offer.status}</Table.Cell>
                    </Table.Row>
            ))}
            </Table.Body>
        </Table>
        </Container>
        )
    }
}
export default AuctionView;