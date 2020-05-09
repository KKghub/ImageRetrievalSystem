import React from 'react';
import axios from 'axios';
import './ImageResultsComponent.css'

class ImageResultsComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            imageList: [
                // {
                //     name:'',
                //     accuracy: ''
                // }
            ]
        }
    }

    componentDidMount() {
        // axios.get("http://localhost:5000/getResults").then(
        //     (resp) => {
        //         console.log(resp.data);
        //         this.setState({
        //             imageList: resp.data
        //         });
        //     }
        // );
    }

    render () {

        return <div className='container'>
        
                    {this.state.imageList.map( (image, index) => (
                        <div key={index}>   
                            <img src={'http://localhost:5000/getImage/' + image.class + '/?name=' + image.name} alt='hey' height='100px' width='100px'></img>
                        </div>
                    ))}
                </div>
    }
}

export default ImageResultsComponent