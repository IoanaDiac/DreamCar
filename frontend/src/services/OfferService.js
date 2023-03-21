import axios from 'axios'

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}

const OFFERS_URL = 'http://localhost:8080/offers'

class OfferService{
    getOffers() {
        return axios.get(OFFERS_URL, options)
    }

    addOffer(pricePerProduct, description, status, auction_id, user_id) {
        axios.post(OFFERS_URL,
            {
                "pricePerProduct": pricePerProduct,
                "description": description,
                "status": status,
                "auction": {
                    "id": auction_id
                },
                "user": {
                    "id": user_id
                }
            }, options)
    }



    deleteOffer(id) {
        axios.delete(OFFERS_URL + '/' + id, options)
            .then(response => {
                window.AuctionView.handleRefresh();
            })
    }

    // updateProduct(id, firstName, lastName, birthDate, nationality) {
    //     axios.put(OFFERS_URL + '/' + id,
    //         {
    //             "firstName": firstName,
    //             "lastName": lastName,
    //             "birthDate": birthDate,
    //             "nationality": nationality
    //         }, options)
    //         .then(response => {
    //             window.OfferComponent.handleRefresh()
    //         })
    // }
}

export default new OfferService();
