import React from 'react'
import {Navbar, Form, Col, Button, ListGroup, Row, FormControl, FormGroup, Card } from 'react-bootstrap'
import { withRouter } from "react-router";
import { Prompt } from 'react-router'
import ModalCheckout from './ModalCheckoutpage';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase';

class Checkoutpage extends React.Component{
    state={
        callback : true,
        show : false,
        nama : '',
        meja : 0,
        status : '',
        data : this.props.location.data
    }
    componentDidMount(){
        console.log(this.props.location.data)
    }

    addPesanan = () => {
        const pesanan = {
            id : uuidv4(),
            data : this.state.data,
            nama : this.state.nama,
            meja : this.state.meja
        }
        firebase.firestore().collection("/pesanan")
        .doc(pesanan.id).set({
            id : pesanan.id,
            data : pesanan.data,
            nama : pesanan.nama,
            meja : pesanan.meja,
            status: 'menunggu konfirmasi'
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        this.props.history.push({
            pathname: '/pesanan',
            id : pesanan.id
        })
    }

    handleClose = () => {
        this.setState({
            show : false,
            callback : true
        })
    }

    handleShow = () => {
        this.setState({
            show : true,
            callback : false
        })
    }

    handleChangeNama = (e) => {
        this.setState({
            nama : e.target.value
        })
    }

    handleChangeNo = (e) => {
        this.setState({
            meja : e.target.value
        })
    }

    render(){
        return(
            <div>
                
                <Prompt
                    when={this.state.callback}
                    message='Pesanan anda akan terhapus, apakah anda yakin melanjutkan ?'
                />
                <div>
                    <Navbar bg="light" variant="light" style={{paddingLeft: 40}}>
                        <Navbar.Brand href="#home">Quto App</Navbar.Brand>
                        
                    </Navbar>
                </div>
                <div style={{padding : 40}}>
                    <div style={{marginBottom : 40}}>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="string" placeholder="" onChange={this.handleChangeNama}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicNumber">
                                <Form.Label>Meja</Form.Label>
                                <Form.Control type="number" placeholder="" onChange={this.handleChangeNo}/>
                            </Form.Group>
                        </Form>
                    </div>
                    <div>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{paddingLeft : 0}}>
                                    <Row>
                                        <Col xs={6}>
                                            <p style={{fontWeight : 'bold'}}>Nama menu</p>
                                        </Col>
                                        <Col xs={3}>
                                            <p style={{fontWeight : 'bold'}}>Jumlah</p>
                                        </Col>
                                        <Col xs={3}>
                                            <p style={{fontWeight : 'bold'}}>
                                                Harga
                                            </p>
                                        </Col>
                                    </Row>
                            </ListGroup.Item>
                            {this.state.data.map((data, index) =>
                                <ListGroup.Item key={index} style={{paddingLeft : 0}}>
                                    <Row>
                                        <Col xs={6}> {data.menu}</Col>
                                        <Col xs={3}>{data.jumlah}</Col>
                                        <Col xs={3}>{(data.harga)}</Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                             <ListGroup.Item style={{paddingLeft : 0, fontWeight : 'bold'}}>
                                    <Row>
                                        <Col xs={6}>Total</Col>
                                        <Col xs={3}>2</Col>
                                        <Col xs={3}>10000</Col>
                                    </Row>
                                </ListGroup.Item>
                        </ListGroup>
                    </div>
                    
                </div>
                <div style={{padding : 40, paddingTop : 0}}>
                    <ModalCheckout
                        handleShow = {this.handleShow}
                        handleClose = {this.handleClose}
                        show = {this.state.show}
                        home = {this.addPesanan}
                        />
                    <div>
                        <Button style={{width : '100%'}} variant="primary" onClick={this.handleShow}>Pesan Sekarang</Button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default withRouter(Checkoutpage);