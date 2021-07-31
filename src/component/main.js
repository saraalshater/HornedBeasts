import React from 'react';
import HornedBeasts from './HornedBeasts';
// import Data from '../data.json';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // hornedData: Data,
            data: this.props.data,
        };
    }


    render() {
        return (

            this.state.data.map(element => {
                return (

                    <HornedBeasts
                        title={element.title}
                        imgUrl={element.image_url}
                        description={element.description}
                        handleOpen={this.props.handleOpen}
                        getSelectedMethod={this.props.getSelectedMethod}
                    />

                );
            })
        
        );
    }
}




export default Main; 
