import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




class SelectedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }


    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.src} alt={this.props.title} style={{ width: '29em'}}/>
                        <p>{this.props.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                     
                    </Modal.Footer>
                </Modal>
              
            </div>
        );
    }



}



export default SelectedBeast;
