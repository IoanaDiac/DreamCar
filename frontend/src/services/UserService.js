import axios from 'axios'

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}

const USERS_URL = 'http://localhost:8080/users'

class UserService{
    getUsers() {
        return axios.get(USERS_URL, options)
    }
    getUserById(userId){
        return axios.get(USERS_URL + '/' + userId);
    }

    addUser(name, username, password, email, company, role ) {
        axios.post(USERS_URL,
            {
                "name": name,
                "username": username,
                "password": password,
                "email": email,
                "company": company,
                "role": role
            }, options)
            .then(response => {
                window.userComponent.handleRefresh()
            })
    }

    deleteUser(id) {
        axios.delete(USERS_URL + '/' + id, options)
            .then(response => {
                window.userComponent.handleRefresh();
            })
    }


}

export default new UserService();
