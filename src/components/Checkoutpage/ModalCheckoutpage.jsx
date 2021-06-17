import React from 'react'
import {Navbar, Form, Col, Button, Modal} from 'react-bootstrap'

class ModalCheckout extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Modal
                    show={this.props.show}
                    onHide={this.props.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header >
                        <Modal.Title>Konfirmasi Pesanan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Apakah anda yakin memproses pesanan Anda ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Batal
                        </Button>
                        <Button variant="primary" onClick={this.props.home}>Yakin</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default ModalCheckout; 