import axios from 'axios'

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}

const PRODUCTS_URL = 'http://localhost:8080/products'

class ProductService{
    getProducts() {
        return axios.get(PRODUCTS_URL, options)
    }

    addProduct(name, description) {
        axios.post(PRODUCTS_URL,
            {
                "name": name,
                "description": description
            }, options)
            .then(response => {
                window.productComponent.handleRefresh()
            })
    }

    deleteProduct(id) {
        axios.delete(PRODUCTS_URL + '/' + id, options)
            .then(response => {
                window.productComponent.handleRefresh();
            })
    }

    // updateProduct(id, firstName, lastName, birthDate, nationality) {
    //     axios.put(ProductS_URL + '/' + id,
    //         {
    //             "firstName": firstName,
    //             "lastName": lastName,
    //             "birthDate": birthDate,
    //             "nationality": nationality
    //         }, options)
    //         .then(response => {
    //             window.productComponent.handleRefresh()
    //         })
    // }
}

export default new ProductService();
