import React from 'react';
import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';
import Data from './data.json';
import SelectedBeast from './component/selectedBeast';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: ' ',
      src: ' ',
      description: ' ',
      // showfilter: true,
      fliteredHorn: Data

    };

  }

  handleClose = () => {
    this.setState({
      show: false
    });

  }

  handleOpen = () => {
    this.setState({
      show: true
    });
  }

  getSelectedMethod = (title, src, description) => {
    this.setState({
      title: title,
      src: src,
      description: description,

    });

  }

  fliterTheNumOfHorns = (event) => {

    let horns = event.target.value;

    let filterData = Data.filter((item) => {
      if (item.horns == horns) {

        return true;
      }
    });

    this.setState({
      fliteredHorn: filterData
    });
console.log(filterData);
  }


  render() {
    return (
      <div>
        <Header />

        <Form.Label>Select a horen</Form.Label>
        <Form.Select aria-label="Default select example" onChange={this.fliterTheNumOfHorns} >

          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">100 </option>
        </Form.Select>

        <Form />

        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          src={this.state.src}
          description={this.state.description}


        />
        <Main
          data={this.state.fliteredHorn}
          handleOpen={this.handleOpen}
          getSelectedMethod={this.getSelectedMethod}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
