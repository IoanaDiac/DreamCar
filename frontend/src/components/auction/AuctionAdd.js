import OfferService from "../../services/OfferService";

import {Button, Container, Dropdown, Form, Header, Table} from "semantic-ui-react";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import {Component} from "react";
import AuctionService from "../../services/AuctionService";
import ProductService from "../../services/ProductService";

class OfferAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expirationDate: '',
            name: '',
            numberOfProducts: 0,
            targetPrice: 0,
            productId: 0,
            status: 0,
            auction: {},
            products: []
        }
        this.changeExpirationDateHandler = this.changeExpirationDateHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeNumberOfProductsHandler = this.changeNumberOfProductsHandler.bind(this);;
        this.changeTargetPriceHandler = this.changeTargetPriceHandler.bind(this);
        this.changeProductIdHandler = this.changeProductIdHandler.bind(this);
        this.saveOrUpdateOffer = this.saveOrUpdateOffer.bind(this);
    }

    // step 3
    componentDidMount(){
        ProductService.getProducts().then(response => {
            let products = response.data
            this.setState({products: products})
        })
    }




    saveOrUpdateOffer = (e) => {
        e.preventDefault();
        console.log(this.state.numberOfProducts)

        console.log(this.state.productId);
        AuctionService.addAuction(this.state.expirationDate, this.state.name, this.state.numberOfProducts, this.state.targetPrice, this.state.productId, this.state.status);
        this.props.history.push(`/auctions`)
    }

    changeExpirationDateHandler= (event) => {
        this.setState({expirationDate: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeNumberOfProductsHandler= (event) => {
        this.setState({numberOfProducts: event.target.value});
    }

    changeProductIdHandler= (event) => {
        this.setState({productId: event.target.value});
    }

    changeTargetPriceHandler= (event) => {
        this.setState({targetPrice: event.target.value});
    }

    cancel(){
        this.props.history.push(`/auctions`)
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
                    Adauga Licitatie
                </Header>
                <Form>
                    <Form.Field>
                        <label> Nume Licitatie: </label>
                        <input placeholder="Nume Licitatie" name="NumeLicitatie" className="form-control"
                               value={this.state.name} onChange={this.changeNameHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <label> Componenta Licitata: </label>
                        <select onChange={this.changeProductIdHandler}>
                            {this.state.products.map((product, index) =>
                                <option key={index} value={product.id}>
                                    {product.name}
                                </option>)}
                        </select>

                    </Form.Field>
                    <Form.Field>
                        <label> Numar Componente: </label>
                        <input placeholder="Numar Componente " name="numarComponente" className="form-control"
                               value={this.state.numarComponente} onChange={this.changeNumberOfProductsHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <label> Pret tinta/componenta: </label>
                        <input placeholder="Pret/componenta" name="pricePerProductTarget" className="form-control"
                               value={this.state.pricePerProduct} onChange={this.changeTargetPriceHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <label> Data Expirare: </label>
                        <input placeholder="Data Expirare " name="dataExpirare" className="form-control"
                               value={this.state.descriptionId} onChange={this.changeExpirationDateHandler}/>
                    </Form.Field>

                    <Button primary onClick={this.saveOrUpdateOffer}>Save</Button>
                    <Button secondary onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</Button>
                </Form>
            </Container>
        )
    }
}

export default OfferAdd