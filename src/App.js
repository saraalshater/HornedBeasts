import React from 'react';
import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';
import Data from './data.json';
import SelectedBeast from './component/selectedBeast';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: ' ',
      src: ' ',
      description: ' '

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

  getSelectedMethod = (title,src,description) =>{
    this.setState({
      title: title,
      src: src,
      description: description,

    }); 

  }



  render() {
    return (
      <div>
        <Header />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          src={this.state.src}
          description={this.state.description}
         

        />
        <Main
          data={Data}
          handleOpen={this.handleOpen}
          getSelectedMethod={this.getSelectedMethod}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
