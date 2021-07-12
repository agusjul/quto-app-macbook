import React from 'react';
import {Modal, Button, Form, Col, Card, ListGroup, Row} from 'react-bootstrap'
import firebase from '../../../firebase'

class ModalDashboard extends React.Component{
    state={
        detailPesanan : []
    }

    async componentDidMount(){
        this.getDetailPesanan()
    }

    getDetailPesanan = (n) => {
        firebase.firestore().collection("pesanan").doc(`${this.props.id}`).onSnapshot((doc) => {
            this.setState({
                detailPesanan : doc.data(),
            })
    });
    }

    render(){
        return(
            <>
            <Button variant="outline-primary" size="sm" onClick={this.props.handleShow}>
                Lihat Detail Pesanan
            </Button>

            <Modal
                show={this.props.show}
                onHide={this.props.handleShow}
                backdrop="static"
                keyboard={false}
                >
                    {console.log(this.props.id)}
                <Modal.Header>
                <Modal.Title>Detail Pesanan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ListGroup variant="flush">
                                        <ListGroup.Item style={{paddingLeft : 0, fontSize : 12}}>
                                            <Row style={{fontWeight : 'bold'}}>
                                                <Col xs={6}>Nama :
                                                </Col>
                                                <Col xs={6}>
                                                        No Meja :
                                                </Col>
                                            </Row>     
                                            <Row>
                                                <Col xs={6}>{this.state.detailPesanan.nama}</Col>
                                                <Col xs={6}>{this.state.detailPesanan.meja}</Col>
                                            </Row>            
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{paddingLeft : 0, fontSize : 12}}>
                                            <Row>
                                                {this.props.detailPesanan && this.props.detailPesanan.length > 0 && this.props.detailPesanan.map((datas, index)=>(
                                                    <React.Fragment key={index}>
                                                        <Col xs={6}>{datas.menu}</Col>
                                                        <Col xs={2}>{datas.jumlah}</Col>
                                                        <Col xs={4}>{this.formatRupiah(datas.harga)}</Col>
                                                    </React.Fragment>
                                                ))}
                                            </Row>                
                                        </ListGroup.Item>
                                        {/* <ListGroup.Item style={{paddingLeft : 0, fontSize : 12}}>
                                            <Row style={{fontWeight : 'bold'}}>
                                                <Col xs={6}>Total</Col>
                                                <Col xs={2}>{this.totalJumlah()}</Col>
                                                <Col xs={4}>{this.totalHarga()}</Col>
                                            </Row>                
                                        </ListGroup.Item> */}
                                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Tutup
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default ModalDashboard;