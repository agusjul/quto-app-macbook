import logo from './logo.svg';
import './App.css';
import React from 'react';
import Listmenu from './components/Listmenupage/Listmenu'
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  state={
    login : ''
  }

  validateLogin = () => {
    this.setState({
      login : 'haha'
    })
  }

  render(){
    return(
      <Container fluid style={{padding : 0}}>
        <Listmenu/>
      </Container>
    )
  }
}

export default App;
