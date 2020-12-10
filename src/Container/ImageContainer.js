import React from 'react'
import {yes, no} from '../objects.js'
import Image from '../Components/Image'
import Statement from '../Components/Statement'

class ImageContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            statement: no['no-statement'],
            image: no['no-image']
        };
    }
        handleClick = () => {
            if (this.state.statement === no['no-statement'] && this.state.image === no['no-image']) {
                this.setState({
                        statement: yes['yes-statement'],
                        image: yes['yes-image']
                    })
                } else {
                    this.setState({
                        statement: no['no-statement'],
                        image: no['no-image']
                    })
            }
        }
            
        render() {
            return (
                <div>
                    <Statement statement={this.state.statement}/>
                    <Image image={this.state.image} handleClick={this.handleClick}/>
                </div>
                )
        }
}

export default ImageContainer