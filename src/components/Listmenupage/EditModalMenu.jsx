import React from 'react';
import {Modal, Button, Form, Col} from 'react-bootstrap'

class ModalList extends React.Component {


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
                    <Modal.Body>
                        <Form.Group as={Col} md="12">
                        <Form.Label>Pilih Menu</Form.Label>
                            <Form.Control
                                as="select"
                                id="inlineFormCustomSelectPref"
                                custom
                                onChange={this.props.menuChange}
                                value={this.props.menu}
                            >
                                <optgroup label="Makanan">Makanan</optgroup>
                                    <option value="none">Pilih...</option>
                                    <option value="Tipat Mie">Tipat Mie</option>
                                    <option value="Soto">Soto</option>
                                    <option value="Mie Ayam">Mie Ayam</option>
                                <optgroup label="Minuman">Minuman</optgroup>
                                    <option value="Es Teh">Es Teh</option>
                                    <option value="Es Jeruk">Es Jeruk</option>
                                    <option value="Susu">Susu</option>
                            </Form.Control>
                        </Form.Group>
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