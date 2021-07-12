import React from 'react'
import {Container, Navbar, Row, Col, Button, ListGroup, Spinner, Card, Badge, Alert} from 'react-bootstrap'
import ModalDashboard from './ModalDashboard'
import firebase from '../../../firebase'

class Dashboard extends React.Component{

    state = {
        pesanan : [],
        loading : true,
        show : false,
        detailpesanan : [],
        alert : false
    }

    async componentDidMount(){
        this.getPesanan()
    }

   handlealertShow = () =>{
        this.setState({
            alert : true
        })
   }

   handlealertClose = () =>{
        this.setState({
            alert : false
        })
    }

    getPesanan = () => {
        const ref = firebase.firestore().collection("pesanan");
        ref.onSnapshot((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((doc)=> {
                items.push(doc.data());
            });
            this.setState({
                pesanan : items,
                loading : false
            })
        })
    }

    handleShow = () => {
        this.setState({
            show : true
        })
    }

    handleClose = () => {
        this.setState({
            show : false
        })
    }

    totalJumlah = () => {
        
        var total = 0
        this.state.pesanan.data.data.map((datas, i)=> {
            total += (datas.jumlah)
        })

        console.log(total)
        return(total)
        
    }

    render(){
        return(
            <div style={{padding : 5, paddingTop : 40 , overflow: 'scroll', maxHeight : '100vh'}}>
                <Alert show={this.state.alert} variant="success" onClose={() => this.handlealertClose()} dismissible>
                <Alert.Heading>Pesanan Diterima</Alert.Heading>
                    <p>
                        Selamat, Pesanan Bersahil diterima!
                    </p>
                </Alert>
                {this.state.loading ? (
                    <div style={{padding : 20, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                        <Spinner animation="border" variant="primary" />
                    <p style={{marginLeft : 20}}>Loading</p>
               </div>
                ) : (
                    this.state.pesanan.map((datas)=> {
                        return (
                            <Card style={{marginBottom : 10, flexWrap : 'wrap'}}>
                                <Card.Body style={{paddingBottom : 0}}>
                                    <div style={{marginBottom : 20}}>
                                        <Row style={{fontWeight : 'bold'}}>
                                        <Col xs={6}>Nama :
                                        </Col>
                                        <Col xs={6}>
                                                No Meja :
                                        </Col>
                                        </Row> 
                                        <Row>
                                            <Col xs={6}>{datas.nama}
                                            </Col>
                                            <Col xs={6}>
                                                    {datas.meja}
                                            </Col>
                                        </Row> 
                                    </div>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Row>
                                            <Col xs={6}>
                                                <ModalDashboard
                                                    show={this.state.show}
                                                    handleShow={this.handleShow}
                                                    handleClose={this.handleClose}
                                                    id={datas.id}
                                                />
                                            </Col>
                                            <Col xs={6}>
                                                <Button variant="success" size="sm" onClick={()=>this.handlealertShow()}>Terima Pesanan</Button>
                                            </Col>
                                            </Row> 
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        )
                       
                    }
                    )
                )
                }

            </div>
        )
}}

export default Dashboard;