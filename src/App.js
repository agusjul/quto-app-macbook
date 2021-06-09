import logo from './logo.svg';
import './App.css';
import React from 'react';
import Listmenu from './components/Listmenupage/Listmenu'
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';


class App extends React.Component {

  state={
    login : ''
  }

  validateLogin = () => {
    this.setState({
      login : 'haha'
    })
  }

  componentDidMount(){
    const ref = firebase.firestore().collection("users");
    ref.onSnapshot((querysnapShot)=>
    console.log(querysnapShot.docs)
    )
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
