import React from 'react'
import {Navbar, Form, Col, Button, ListGroup, Row } from 'react-bootstrap'
import { withRouter } from "react-router";

class Checkoutpage extends React.Component{
    componentDidMount(){
        console.log(this.props.location.data)
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
                    <div style={{marginBottom : 40}}>
                        <p>Checkoutpage</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Checkoutpage);