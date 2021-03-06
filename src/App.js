import logo from './logo.svg';
import './App.css';
import React from 'react';
import Listmenu from './components/Listmenupage/Listmenu'
import Checkoutpage from './components/Checkoutpage/Checkoutpage'
import Homepage from './components/Homepage/Homepage'
import Waitingpage from './components/Waitingpage/Waitingpage';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import CustomPage from './components/adminpage/Drawer/Custompage';
import Dashboard from './components/adminpage/Dashboard/Dashboard';
import Pesanan from './components/adminpage/Pesanan/Pesanan';
import Menu from './components/adminpage/Menupage/Menupage';
import Profil from './components/adminpage/Profil/Profil';
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
          <Route path="/pesanan">
            <Container fluid style={{padding : 0}}>
              <Waitingpage/>
            </Container>
          </Route>
          <Route path="/admin">
            <Container fluid style={{padding : 0}}>
              <CustomPage/>
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
