import logo from './logo.svg';
import './App.css';
import React from 'react';
import Listmenu from './components/Listmenupage/Listmenu'
import Checkoutpage from './components/Checkoutpage/Checkoutpage'
import Homepage from './components/Homepage/Homepage'
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {

  render(){
    return(
      <Router>
        <Switch>
          <Route path="/listmenu">
            <Container fluid style={{padding : 0}}>
              <Listmenu/>
            </Container>
          </Route>
          <Route path="/checkout">
            <Container fluid style={{padding : 0}}>
              <Checkoutpage/>
            </Container>
          </Route>
          <Route path="/">
            <Container fluid style={{padding : 0}}>
              <Homepage/>
            </Container>
          </Route>
        </Switch>
      </Router>
      
    )
  }
}

export default App;
