import React from 'react';
import {Navbar, Form, Col, Button, ListGroup, Row } from 'react-bootstrap'
import ModalList from './ModalListMenu';
import firebase from '../../firebase';
import EditMenu from './EditModalMenu';

import { withRouter } from "react-router";

class Listmenu extends React.Component {

    state = {
        show : false,
        listmenu : [],
        menu : '',
        jumlah : 1,
        showedit : false,
        menus : [],
        menus2 : [],
        selected : {},
        edit : {},
        arrayindex : 0,
        jumlahedit : 1
    }


    async componentDidMount(){
        this.getMenus()
        this.getMenus2()
    }

    getMenus = () => {
        const ref = firebase.firestore().collection("menuMakanan");
        ref.onSnapshot((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((doc)=> {
                items.push(doc.data());
            });
            this.setState({
                menus : items
            })
        })
    }
    getMenus2 = () => {
        const ref = firebase.firestore().collection("menuMinuman");
        ref.onSnapshot((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((doc)=> {
                items.push(doc.data());
            });
            this.setState({
                menus2 : items
            })
        })
    }

    handleMenuChange = (e) => {
        this.setState({
            menu : e
        })
    }

    handleJumlahChange = (e) => {
        this.setState({
            jumlah : e.target.value
        })
    }

    handleShow = () => {
        this.setState({
            show : true
        })
    }

    handleShowEdit = () => {
        this.setState({
            showedit : true
        })
    }

    handleClose = () => {
        this.setState({
            show : false,
            selected : {}
        })
    }

    handleCloseEdit = () => {
        this.setState({
            showedit : false,
        })
    }

    addMenu = () => {
        const oldData = this.state.listmenu
        const Data = {}
        Data.menu = this.state.selected.nama
        Data.harga = this.state.selected.harga
        Data.gambar = this.state.selected.gambar
        Data.jumlah = this.state.jumlah
        oldData.push(Data)

        this.setState({
            listmenu : oldData,
            show :  false,
            selected : {},
            jumlah : 1
        })

        console.log(this.state.listmenu)
    }

    editMenuModal = (e, index) => {
        this.setState({
            edit : e,
            arrayindex : index
        })
        console.log(this.state.edit)
        this.setState({
            showedit : true
        })
    }

    mapListMenu = () => {
        if(this.state.listmenu.length > 0){
            return (
                <ListGroup variant="flush">
                    <ListGroup.Item style={{paddingLeft : 0}}>
                            <Row style={{cursor : 'pointer'}}>
                                <Col xs={8}>
                                    <p style={{fontWeight : 'bold'}}>Nama menu</p>
                                </Col>
                                <Col xs={2}>
                                    <p style={{fontWeight : 'bold'}}>Jumlah</p>
                                </Col>
                                <Col xs={2}>
                                    <p style={{fontWeight : 'bold'}}>
                                        Harga
                                    </p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    {this.state.listmenu.map((data, index) =>
                        <ListGroup.Item key={index} onClick={()=>this.editMenuModal(data, index)} style={{paddingLeft : 0}}>
                            <Row style={{cursor : 'pointer'}}>
                                <Col xs={8}> {data.menu}</Col>
                                <Col xs={2}>{data.jumlah}</Col>
                                <Col xs={2}>{(data.harga)}</Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            )
        } else {
            return( 
            <p>
                Pesanan Anda Kosong, Segera Tambahkan Pesanan
            </p>
            )
        }
    }

    selectMenu = (e) => {
        this.setState({
            selected : e
        })
        console.log(e)
    }

    cssSelect = (e) => {
        if (this.state.selected.nama === e){
            return '#6495ED'
        } else {
            return ""
        }
    }

    editModalJumlahChange = (e) => {
        const datas = this.state.edit
        datas.jumlah = e.target.value
        this.setState({
            edit : datas
        })
        console.log('edited jumlah = ',this.state.edit)
    }

    simpanEdit = () => {
        this.state.listmenu.slice(this.state.arrayindex-1, this.state.arrayindex, this.state.edit)
        console.log("update data = ", this.state.listmenu)
        this.setState({
            showedit : false
        })
    }

    totalHarga = () => {
        if(this.state.listmenu.length > 0){
            let total = 0
            this.state.listmenu.map((datas, i)=> {
                total += (datas.harga*datas.jumlah)
            })
            return (` - ${total}`)
        }
        else {
            return ''
        }
    }

    gotoCheckout = () => {
        console.log('click')
        this.props.history.push({
            pathname: '/checkout',
            data : this.state.listmenu
        })
    }

    checkoutBottom = () => {
        if(this.state.listmenu.length > 0){
            return (
                <div>
                    <Button style={{width : '100%'}} variant="primary" onClick={this.gotoCheckout} >
                        Chekcout{`${this.totalHarga()}`}
                    </Button>
                </div>)
        }else {
            return (
            <div>
                <Button style={{width : '100%'}} variant="primary" onClick={this.gotoCheckout} disabled>Chekcout{`${this.totalHarga()}`}
                </Button>
            </div>)
        }
    }


    render() {
        return(
            <div>
                <div>
                    <Navbar bg="light" variant="light" style={{paddingLeft: 40}}>
                        <Navbar.Brand href="#home">Quto App</Navbar.Brand>
                        
                    </Navbar>
                </div>
                <div style={{padding : 40}}>
                    <div style={{marginBottom : 40}}>
                        {this.mapListMenu()}
                    </div>
                    <div>
                        <ModalList  
                            tampil={this.state.show} 
                            tampilkan={this.handleShow} 
                            hide={this.handleClose} 
                            tambahMenu={this.addMenu}
                            menuChange={this.handleMenuChange}
                            jumlahChange={this.handleJumlahChange}
                            menu={this.state.menu}
                            jumlah={this.state.jumlah}
                            listmenu={this.state.menus}
                            listmenu2={this.state.menus2}
                            selectMenu = {this.selectMenu}
                            cssSelect = {this.cssSelect}
                        />
                    
                        <EditMenu
                            data={this.state.edit}
                            tampil={this.state.showedit}
                            tampilkan={this.handleShowEdit}
                            hide={this.handleCloseEdit}
                            index = {this.state.arrayindex}
                            gantiJumlah = {this.editModalJumlahChange}
                            simpanEdit = {this.simpanEdit}
                        />
                         <Button style={{width : '100%'}} variant="primary" onClick={this.gotoCheckout} >
                            Chekcout{`${this.totalHarga()}`}
                        </Button>
                        {this.checkoutBottom}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Listmenu);