import React from 'react'
import {Navbar, Row, Col, Button, ListGroup, Spinner, Card, Badge} from 'react-bootstrap'
import { withRouter } from "react-router";
import firebase from '../../firebase';
import { useLocation } from 'react-router-dom'

class Waitingpage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pesanan : [],
            isLoading : false,
            reload : false
        }
      }
    

    async componentDidMount(){
        this.getPesanan(this.props.location.id)
    }


    getPesanan = (n) => {
        this.setState({
            isLoading : true
        })
        firebase.firestore().collection("pesanan").doc(`${n}`).onSnapshot((doc) => {
            this.setState({
                pesanan : doc.data(),
                isLoading : false
            })
        });
    
    //     ref.onSnapshot((querySnapshot)=> {
    //         const items = [];
    //         querySnapshot.forEach((doc)=> {
    //             items.push(doc.data());
    //         });
    //         this.setState({
    //             pesanan : items,
    //             isLoading : false
    //         })
    //     })

        
    }


    totalHarga = () => {
        if(this.state.pesanan.data && this.state.pesanan.data.length > 0){
            let total = 0
            this.state.pesanan.data.map((datas, i)=> {
                total += (datas.harga*datas.jumlah)
            })
            return (`${this.formatRupiah(total)}`)
        }
        else {
            return ''
        }
    }

    totalJumlah = () => {
        if(this.state.pesanan.data && this.state.pesanan.data.length > 0){
            let total = 0
            this.state.pesanan.data.map((datas, i)=> {
                total += (datas.jumlah)
            })
            return (`${total}`)
        }
        else {
            return ''
        }
    }

    cssConfirm = () => {
        if(this.state.pesanan && this.state.pesanan.status === 'menunggu konfirmasi'){
            return('warning')
        }
        else if(this.state.pesanan && this.state.pesanan.status === 'gagal'){
            return('danger')
        }
        else if(this.state.pesanan && this.state.pesanan.status === 'terkonfirmasi'){
            return('success')
        }
    }

    formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
          { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
    }

    cardInfo = () => {
        if(this.state.pesanan && this.state.pesanan.status === 'menunggu konfirmasi'){
            return(
            <Card style={{ marginBottom : 10, padding : 10}} bg={"warning"}>
                <Card.Title style={{padding: 5, marginBottom : 0}}>
                    <p style={{fontWeight : 'normal', fontSize : 14, margin : 0}}><span style={{fontWeight : 'bold'}}>Perhatian</span>
                    </p>
                </Card.Title>
                <Card.Body style={{padding : 5}}>
                    <div style={{fontSize : 14}}>
                        Jangan meninggalkan halaman sebelum pesanan dikonfirmasi
                    </div>
                </Card.Body>
            </Card>
            )
        }
        else if(this.state.pesanan && this.state.pesanan.status === 'gagal'){
            return(
            <Card style={{ marginBottom : 10, padding : 10}} bg={"danger"}>
                <Card.Title style={{padding: 5, marginBottom : 0}}>
                    <p style={{fontWeight : 'normal', fontSize : 14, margin : 0}}><span style={{fontWeight : 'bold'}}>Perhatian</span>
                    </p>
                </Card.Title>
                <Card.Body style={{padding : 5}}>
                    <div style={{fontSize : 14}}>
                        Pesanan anda ditolak, silhkan pesan ulang atau hubungi pelayan
                    </div>
                </Card.Body>
            </Card>
            )
        }
        else if(this.state.pesanan && this.state.pesanan.status === 'terkonfirmasi'){
            return(
                <Card style={{ marginBottom : 10, padding : 10}} bg={"success"}>
                <Card.Title style={{padding: 5, marginBottom : 0}}>
                    <p style={{fontWeight : 'normal', fontSize : 14, margin : 0}}><span style={{fontWeight : 'bold'}}>Selamat</span>
                    </p>
                </Card.Title>
                <Card.Body style={{padding : 5}}>
                    <div style={{fontSize : 14}}>
                        Pesanan anda berhasil dikonfirmasi, silahkan tunggu :)
                    </div>
                </Card.Body>
                </Card>
            )
        }
        
    }

    render(){
        return(
           <React.Fragment>
               {this.state.isLoading ? (
                   <div style={{padding : 20, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                        <Spinner animation="border" variant="primary" />
                        <p style={{marginLeft : 20}}>Loading</p>
                   </div>
               ) : (
                <div>
                    <div>
                        <Navbar bg="light" variant="light" style={{paddingLeft: 40}}>
                            <Navbar.Brand href="#home">Quto App</Navbar.Brand>
                            
                        </Navbar>
                    </div>
                    <div style={{padding : 20}}>
                        <p>Pesanan Anda</p>
                        <Card style={{ marginBottom : 10, padding : 10}}>
                                <Card.Title style={{padding: 5, marginBottom : 0}}>
                                    <p style={{fontWeight : 'normal', fontSize : 14, margin : 0}}><span style={{fontWeight : 'bold'}}>Status : </span>
                                        <Badge style={{marginLeft : 10}} pill variant={`${this.cssConfirm()}`}>
                                        {this.state.pesanan.status}
                                         
                                        </Badge>
                                    </p>
                                </Card.Title>
                                <Card.Body style={{padding : 5}}>
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
                                                <Col xs={6}>{this.state.pesanan.nama}</Col>
                                                <Col xs={6}>{this.state.pesanan.meja}</Col>
                                            </Row>            
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{paddingLeft : 0, fontSize : 12}}>
                                            <Row>
                                                {this.state.pesanan.data && this.state.pesanan.data.length > 0 && this.state.pesanan.data.map((datas, index)=>(
                                                    <React.Fragment key={index}>
                                                        <Col xs={6}>{datas.menu}</Col>
                                                        <Col xs={2}>{datas.jumlah}</Col>
                                                        <Col xs={4}>{this.formatRupiah(datas.harga)}</Col>
                                                    </React.Fragment>
                                                ))}
                                            </Row>                
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{paddingLeft : 0, fontSize : 12}}>
                                            <Row style={{fontWeight : 'bold'}}>
                                                <Col xs={6}>Total</Col>
                                                <Col xs={2}>{this.totalJumlah()}</Col>
                                                <Col xs={4}>{this.totalHarga()}</Col>
                                            </Row>                
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                        </Card>
                    </div>
                    <div style={{padding : 20, paddingTop : 0}}>
                        {this.cardInfo()}
                    </div>
                
                </div>
               )}
           </React.Fragment>
        )
    }
}

export default withRouter(Waitingpage);