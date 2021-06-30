import React from 'react'
import {Navbar, Form, Col, Button, ListGroup, Row, Carousel } from 'react-bootstrap'
import { withRouter } from "react-router";
import QrReader from 'react-qr-reader'
import ModalHomepage from './ModalHomepage';
import Quto1 from '../../image/quto1.jpg'
import Quto2 from '../../image/quto2.jpg'
import Quto3 from '../../image/quto3.jpg'

class Homepage extends React.Component{
    state={
        result : 'none',
        showModal : false
    }

    handleScan = data => {
        if (data) {
          this.setState({
            result: data,
            showModal : false
          })
        this.props.history.push({
            pathname: '/listmenu'
        })
        }
    }
    
    handleError = err => {
        console.error(err)
    }

    handleShow = () => {
        this.setState({
            showModal : true
        })
    }

    handleClose = () => {
        this.setState({
            showModal : false
        })
    }


    render(){
        return(
            <div>
                <div>
                    <Navbar bg="light" variant="light" style={{paddingLeft: 40}}>
                        <Navbar.Brand href="#home">Quto App</Navbar.Brand>
                        
                    </Navbar>
                </div>
                <div style={{padding : 40}}>
                    <div>
                        {/* <Carousel>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block w-100"
                                src={Quto1}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block w-100"
                                src={Quto2}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block w-100"
                                src={Quto3}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel> */}
                    </div>
                    <div style={{marginTop : 40}}>
                        <ModalHomepage
                            handleShow={this.handleShow}
                            handleClose={this.handleClose}
                            showModal={this.state.showModal}
                            handleScan={this.handleScan}
                            handleError={this.handleError}
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Homepage);