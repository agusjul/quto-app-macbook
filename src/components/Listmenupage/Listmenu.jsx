import React from 'react';
import {Navbar, Form, Col, Button, ListGroup, Row } from 'react-bootstrap'
import ModalList from './ModalListMenu';
import firebase from '../../firebase';

class Listmenu extends React.Component {

    state = {
        show : false,
        listmenu : [],
        menu : '',
        jumlah : 1,
        showedit : false,
        menus : [],
        menus2 : []
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

    handleClose = () => {
        this.setState({
            show : false
        })
    }

    addMenu = () => {
        const oldData = this.state.listmenu
        const Data = {}
        Data.menu = this.state.menu
        Data.jumlah = this.state.jumlah
        oldData.push({Data})

        this.setState({
            listmenu : oldData,
            show :  false,
            menu : '',
            jumlah : 1
        })

        console.log(this.state.listmenu)
    }

    editMenu = (e) => {
        this.setState({
            menu : e.menu,
            jumlah : e.jumlah,
            show : true
        })
    }

    mapListMenu = () => {
        if(this.state.listmenu.length > 0){
            return (
                <ListGroup variant="flush">
                    {this.state.listmenu.map((data, index) =>
                        <ListGroup.Item key={index} onClick={()=>this.editMenu(data.Data)}>
                            <Row style={{cursor : 'pointer'}}>
                                <Col xs={4}> {data.Data.menu}</Col>
                                <Col xs={1}>{data.Data.jumlah}</Col>
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

    render() {
        return(
            <div>
                <div>
                    <Navbar bg="light" variant="light" style={{paddingLeft: 40}}>
                        <Navbar.Brand href="#home">Quto App</Navbar.Brand>
                        
                    </Navbar>
                </div>
                <div style={{padding : 40}}>
                    
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
                    />
                </div>
                <div style={{padding : 40}}>
                    {this.mapListMenu()}
                </div>
            </div>
        )
    }
}

export default Listmenu;