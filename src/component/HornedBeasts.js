import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfLikes: 0
        };
    }

    likesCounter = () => {
        this.setState({
            numberOfLikes: this.state.numberOfLikes + 1
        });

    }
    getTheData = () => {
        this.props.handleOpen();
        this.props.getSelectedMethod(this.props.title, this.props.imgUrl, this.props.description);
    }

    render() {
        return (
            <>
                <div>
                    {/* <h2>{this.props.title}</h2>
                    <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title} ></img>
                    <p>{this.props.description}</p> */}


                    <Card style={{ width: '18rem' }} id="card" onClick={this.getTheData} >
                        <Card.Img onClick={this.likesCounter} variant="top" src={this.props.imgUrl} alt={this.props.title} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                                ❤️ : {this.state.numberOfLikes}
                            </Card.Text>
                            {/* <Button variant="primary">i am you favorite </Button> */}
                        </Card.Body>
                    </Card>

                </div>
            </>
        );
    }
}


export default HornedBeasts;
