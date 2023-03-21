import React, { Component } from 'react'
import OfferService from "../../services/OfferService";

import {Button, Container, Form, Header, Table} from "semantic-ui-react";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import UserService from "../../services/UserService";
import AuctionService from "../../services/AuctionService";

class OfferAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userId: 0,
            pricePerProduct: 0,
            description: '',
            users: [],
            status: 0,
            auction: {}
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changePricePerProductHandler = this.changePricePerProductHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateOffer = this.saveOrUpdateOffer.bind(this);
    }

    // step 3
    componentDidMount(){
        UserService.getUsers().then(response => {
            let users = response.data
            this.setState({users: users})
        })

        AuctionService.getAuctionById(this.state.id).then( res => {
            this.setState({auction: res.data});
        })
    }




    saveOrUpdateOffer = (e) => {
        e.preventDefault();
        console.log(this.state.pricePerProduct)

        if (this.state.pricePerProduct <= this.state.auction){
            this.state.status = 1;
            this.state.auction.status = 1;
            console.log(this.state.auction.status)
        }

        AuctionService.updateAuction(this.state.id,this.state.auction.expirationDate, this.state.auction.name, this.state.auction.numberOfProducts, this.state.auction.targetPricePerProduct, this.state.auction.product.id, this.state.auction.status)

        OfferService.addOffer(this.state.pricePerProduct, this.state.description, this.state.status,  this.state.id, this.state.userId);
        this.props.history.push(`/view-auction/${this.state.id}`)
    }

    changeUserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changePricePerProductHandler= (event) => {
        this.setState({pricePerProduct: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({descriptionId: event.target.value});
    }

    cancel(){
        this.props.history.push(`/view-auction/${this.state.id}`)
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
                    Adauga oferta
                </Header>
                                <Form>
                                    <Form.Field>
                                        <label> User: </label>
                                        <select onChange={this.changeUserIdHandler}>
                                            {this.state.users.map((user, index) =>
                                                <option key={index} value={user.id}>
                                                    {user.username}
                                                </option>)}
                                        </select>

                                    </Form.Field>
                                    <Form.Field>
                                        <label> Pret/componenta: </label>
                                        <input placeholder="Pret/componenta" name="pricePerProduct" className="form-control"
                                               value={this.state.pricePerProduct} onChange={this.changePricePerProductHandler}/>
                                    </Form.Field>
                                    <Form.Field>
                                        <label> Description Id: </label>
                                        <input placeholder="Description " name="descriptionId" className="form-control"
                                               value={this.state.descriptionId} onChange={this.changeDescriptionHandler}/>
                                    </Form.Field>

                                    <Button primary onClick={this.saveOrUpdateOffer}>Save</Button>
                                    <Button secondary onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</Button>
                                </Form>
                </Container>
        )
    }
}

export default OfferAdd