import React from "react";
import OfferService from "../../services/OfferService";
import {Button, Form, Modal} from "semantic-ui-react";


export default function OfferAdd(auctionId) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseConfirm = () => {
        let user = document.getElementById('user').value
        console.log(user);
        let pricePerProduct = document.getElementById('pricePerProduct').value
        let description = document.getElementById('description').value

        OfferService.addOffer(pricePerProduct, description, 0, auctionId.children[1], user);

        handleClose()
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color='violet'>Adauga Oferta</Button>}
        >
            <Modal.Header>Adauga Oferta </Modal.Header>

                <Modal.Content>
                    <Form>
                        <Form.Field id="user">
                            <label>First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field id="pricePerProduct">
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field id="description">
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                    </Form>
                </Modal.Content>

                <Modal.Actions>
                    <Button onClick={handleCloseConfirm}
                            style={{
                                color: '#424874',
                                fontFamily: "Helvetica",
                            }}>
                        Confirma
                    </Button>
                    <Button onClick={handleClose}
                            style={{
                                color: '#424874',
                                fontFamily: "Helvetica",
                            }}
                            autoFocus>
                        Renunta
                    </Button>
                </Modal.Actions>
        </Modal>
    );
}
