import React from 'react'
import {Navbar, Row, Col, Button, ListGroup, Spinner, Card } from 'react-bootstrap'
import { withRouter } from "react-router";
import firebase from '../../firebase';

class Waitingpage extends React.Component{

    state = {
        pesanan : [],
        isLoading : false
    }

    async componentDidMount(){
        this.getPesanan()
    }

    getPesanan = () => {
        this.setState({
            isLoading : true
        })
        const ref = firebase.firestore().collection("pesanan");
        ref.onSnapshot((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((doc)=> {
                items.push(doc.data());
            });
            this.setState({
                pesanan : items,
                isLoading : false
            })
        })
    }

    render(){
        return(
           <React.Fragment>
               {this.state.isLoading ? (
                   <div style={{padding : 40, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
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
                    <div style={{padding : 40}}>
                    {console.log(this.state.pesanan)}
                    {this.state.pesanan.map((datas, index)=> {
                                return (
                        <Card key={index} style={{ marginBottom : 10}}>
                            <Card.Body style={{padding : 5}}>
                                {datas.data.map((menus, index)=> {
                                    return (
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{paddingLeft : 0, fontSize : 12}}>
                                            <Row>
                                                <Col xs={6}>{menus.menu}</Col>
                                            </Row>                
                                        </ListGroup.Item>
                                    </ListGroup>
                                    )
                                })}
                            </Card.Body>
                        </Card>
                        )
                    })}
                    </div>
                
                </div>
               )}
           </React.Fragment>
        )
    }
}

export default withRouter(Waitingpage);