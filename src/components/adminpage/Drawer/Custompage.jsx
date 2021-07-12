import 'react-bootstrap-drawer/lib/style.css';
import React from 'react';
import Menu from '../Menupage/Menupage';
import Dashboard from '../Dashboard/Dashboard';
import {
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Pesanan from '../Pesanan/Pesanan';
import Profil from '../Profil/Profil';
import CustomDrawer from './CustomDrawer';

const CustomPage = (props) => {
    let { path, url } = useRouteMatch();
	return (
		<Container fluid className={"min-vh-100"}>
            {console.log(props)}
			<Row className="flex-xl-nowrap vh-100">
				<Col as={ CustomDrawer } xs={ 12 } md={ 3 } lg={2} className="h-auto"/>
				<Col xs={ 12 } md={ 9 } lg={ 10 } className="h-100">
                    
                    <div>
                        <Switch>
                            <Route path={`${path}/pesanan`}>
                                <Pesanan/>
                            </Route>
                            <Route path={`${path}/profil`}>
                                <Profil/>
                            </Route>
                            <Route path={`${path}/menu`}>
                                <Menu/>
                            </Route>
                            <Route path={`${path}`}>
                                <Dashboard />
                            </Route>
                        </Switch>
                        
                    </div>
                        
				</Col>
			</Row>
		</Container>
	);
};

// class CustomPage extends React.Component{
//     constructor(props) {
//         super(props);
//       }
//     render(){
//         return(
//             <Container fluid className={"min-vh-100"}>
// 			<Row className="flex-xl-nowrap vh-100">
// 				<Col as={ CustomDrawer } xs={ 12 } md={ 3 } lg={2} className="h-auto"/>
// 				<Col xs={ 12 } md={ 9 } lg={ 10 } className="h-100">
//                     <div>
//                         H
//                     </div>
//                     <Route component={({ match }) =>
//                     <div>
//                         <Route path={`${match.path}/pesanan`}>
//                             <Pesanan/>
//                         </Route>
//                         <Route path={`${match.path}/profil`}>
//                             <Profil/>
//                         </Route>
//                         <Route path={`${match.path}/menu`}>
//                             <Menu/>
//                         </Route>
//                         <Route path={`${match.path}/admin`}>
//                             <Dashboard />
//                         </Route>
//                     </div>
//                     }/>
                        
// 				</Col>
// 			</Row>
// 		</Container>
//         )
//     }
// }

export default CustomPage;