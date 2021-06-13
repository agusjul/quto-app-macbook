import React from 'react';
import {Modal, Button, Form, Col, Card} from 'react-bootstrap'
import gambar from '../../image/gambar1.jpeg'
import gambar1 from '../../image/sopikan.jpeg'

class EditMenu extends React.Component {
    

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
                        <Modal.Title>Edit Pesanan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form.Group as={Col} md="12" style={{marginBottom : 0}}>
                            <Form.Label>Pilihan Menu</Form.Label>
                            <div style={{height : 250, overflowY : 'scroll'}}> 
                                <div style={{display : 'flex', flexWrap : 'wrap'}}>
                                    
                                        <Card style={{ width: '8rem', cursor : 'pointer', marginBottom : 10, marginRight : 10, height : '10rem', borderColor : `#6495ED` }}>
                                            <Card.Img variant="top" src={this.props.data.gambar} style={{width : '100%', height : '6rem'}}/>
                                            <Card.Body style={{padding : 10}}>
                                                <Card.Text style={{margin : 0}}>
                                                    <p style={{margin : 0, fontSize : 12, fontWeight : 'bold'}}>
                                                        {this.props.data.menu}
                                                    </p>
                                                    <p style={{margin : 0, fontSize : 12}}> 
                                                        {this.props.data.harga}
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    
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
                                onChange={this.props.gantiJumlah} 
                                value={this.props.data.jumlah} 
                                required 
                                />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hide}>
                            Batal
                        </Button>
                        <Button variant="primary" onClick={this.props.simpanEdit}>
                            Simpan
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
            
        )
    }
}

export default EditMenu;