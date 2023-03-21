import axios from 'axios'

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}

const AUCTIONS_URL = 'http://localhost:8080/auctions'

class AuctionService{
    getAuctions() {
        return axios.get(AUCTIONS_URL, options)
    }
    getAuctionById(auctionId){
        return axios.get(AUCTIONS_URL + '/' + auctionId);
    }

    addAuction(expirationDate, name, numberOfProducts, targetPrice, productId, status) {
        axios.post(AUCTIONS_URL,
            {
                "name": name,
                "targetPricePerProduct": targetPrice,
                "expirationDate": expirationDate,
                "numberOfProducts": numberOfProducts,
                "status": status,
                "product": {
                    "id": productId
                },
            }, options)
    }

    deleteAuction(id) {
        axios.delete(AUCTIONS_URL + '/' + id, options)
            .then(response => {
                window.auctionComponent.handleRefresh();
            })
    }

    updateAuction(id, expirationDate, name, number_of_products, target_price, product_id, status,description) {
        axios.put(AUCTIONS_URL + '/' + id,
            {
                "expirationDate": expirationDate,
                "name": name,
                "numberOfProducts": number_of_products,
                "targetPricePerProduct": target_price,
                "product": {
                    "id": product_id
                },
                "status": status
            }, options)
    }
}

export default new AuctionService();
