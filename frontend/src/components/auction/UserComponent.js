import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import UserService from "../../services/UserService";
import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Segment,
    Card,
    Table
} from 'semantic-ui-react'
import ViewUserModal from "./UserViewModal";

class UserComponent extends React.Component {


    constructor(props) {
        super(props);
        window.UserComponent = this
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then(response => {
            let users = response.data
            this.setState({users: users})
        })
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
                    Users
                </Header>
                <Card.Group itemsPerRow={3}>
                {this.state.users.map((user) => (
                    <Card color='purple'>

                        <Card.Content>
                            <Icon name='user circle' size='massive' inverted color='violet'/>
                            <Card.Header>{user.username}</Card.Header>
                            <Card.Meta>{user.name}</Card.Meta>
                            <Card.Description>
                                {user.role}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>

                               <ViewUserModal>{[user.name, user.username, user.password, user.email, user.company, user.role]}</ViewUserModal>
                                <Button basic color='red'>
                                    Delete
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>

                ))}
                </Card.Group>
            </Container>

        )

    }
}
export default UserComponent;