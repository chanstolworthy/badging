import React, { Component } from 'react';
import AddItem from './AddItem'

class Props extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    
    componentDidMount(){
        // alert(this.props.items)
    }
    
    render() {
        const{items} = this.props
        return(
            <div>
                {items}
   
                <button onClick={()=>{this.props.makeAlert()}}>Props Alert</button>
            </div>
        )
    }
}

export default Props;