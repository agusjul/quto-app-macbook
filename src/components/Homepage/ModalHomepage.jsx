import React from 'react'
import {Navbar, Form, Col, Button, ListGroup, Row, Modal } from 'react-bootstrap'
import { withRouter } from "react-router";
import QrReader from 'react-qr-reader'

class modalHomepage extends React.Component{
   
    render(){
        return(
            <div>
                      <Modal
                            show={this.props.showModal}
                            onHide={this.props.handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header>
                                <Modal.Title>Scanner</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <QrReader
                                delay={300}
                                onError={this.props.handleError}
                                onScan={this.props.handleScan}
                                style={{ width: '100%', border :0}}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary">Selesai</Button>
                            </Modal.Footer>
                        </Modal>

                        <Button variant="primary" style={{width : '100%'}} onClick={this.props.handleShow}>
                            Scan QR
                        </Button>
            </div>
        )
    }
}

export default withRouter(modalHomepage);