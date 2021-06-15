import React from 'react'
import {Navbar, Form, Col, Button, ListGroup, Row } from 'react-bootstrap'
import { withRouter } from "react-router";

class Homepage extends React.Component{
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
                        <p>Homepage</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Homepage);