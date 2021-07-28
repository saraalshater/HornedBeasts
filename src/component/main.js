import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from 'data.json';


class Main extends React.Component {

    constructer(props) {
        super(props);
        this.state = {
            hornedData: Data,
        }
    }


    render() {
        return (

            this.state.Data.map(element => {
                return (

                    <HornedBeasts
                        title={element.title}
                        imgUrl={element.image_url}
                        description={element.description}
                    />

                )
            })
        
        )
    }
}




export default Main; 
