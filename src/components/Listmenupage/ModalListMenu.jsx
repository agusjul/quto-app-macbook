import React from 'react';
import {Modal, Button, Form, Col, Card} from 'react-bootstrap'
import gambar from '../../image/gambar1.jpeg'
import gambar1 from '../../image/sopikan.jpeg'

class ModalList extends React.Component {
    state = {
        selected : false
    }

    selectMenu = () => {
        this.setState({
            selected : !this.state.selected
        })
        this.props.menuChange('Pasta')
    }

    render(){
        return(
            <React.Fragment>
                <Modal
                show={this.props.tampil}
                onHide={this.props.hide}
                backdrop="static"
                keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Tambah Pesanan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form.Group as={Col} md="12" style={{marginBottom : 0}}>
                            <Form.Label>Pilih Menu</Form.Label>
                            <div style={{height : 250, overflowY : 'scroll'}}> 
                                <div>
                                    <p style={{fontWeight : 'bold'}}>Makanan</p>
                                </div>
                                <div style={{display : 'flex', flexWrap : 'wrap'}}>
                                    {this.props.listmenu.map((menus, index)=>
                                        <Card key={index} onClick={()=>this.selectMenu()} style={{ width: '8rem', cursor : 'pointer', marginBottom : 10, marginRight : 10, height : '10rem', borderColor : `${this.state.selected ? "#6495ED" : ""}` }}>
                                            <Card.Img variant="top" src={menus.gambar} style={{width : '100%', height : '6rem'}}/>
                                            <Card.Body style={{padding : 10}}>
                                                <Card.Text style={{margin : 0}}>
                                                    <p style={{margin : 0}}>{menus.nama}<br/>
                                                    {menus.harga}
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )}
                                </div>
                                <div>
                                    <p style={{fontWeight : 'bold'}}>Minuman</p>
                                </div>
                                <div style={{display : 'flex', flexWrap : 'wrap'}}>
                                    {this.props.listmenu2.map((menus, index)=>
                                        <Card key={index} onClick={()=>this.selectMenu()} style={{ width: '8rem', cursor : 'pointer', marginBottom : 10, marginRight : 10, height : '10rem', borderColor : `${this.state.selected ? "#6495ED" : ""}` }}>
                                            <Card.Img variant="top" src={menus.gambar} style={{width : '100%', height : '6rem'}}/>
                                            <Card.Body style={{padding : 10}}>
                                                <Card.Text style={{margin : 0}}>
                                                    <p style={{margin : 0}}>{menus.nama}<br/>
                                                    {menus.harga}
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )}
                                </div>
                            </div>
                        </Form.Group>
                        
                    </Modal.Body>
                    <Modal.Body style={{paddingTop : 0}}>
                        <Form.Group md="12" as={Col}>
                            <Form.Label>Jumlah</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Masukkan jumlah" 
                                onChange={this.props.jumlahChange} 
                                value={this.props.jumlah} 
                                required 
                                />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hide}>
                            Batal
                        </Button>
                        <Button variant="primary" onClick={this.props.tambahMenu}>Tambah</Button>
                    </Modal.Footer>
                </Modal>

                <Button onClick={this.props.tampilkan}>
                    Tambah Pesanan
                </Button>
            </React.Fragment>
            
        )
    }
}

export default ModalList;