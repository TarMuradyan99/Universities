import { Component } from "react";

class Input extends Component{
    render(){
        return(
            <input className={this.props.className} ref={this.props.propsref} placeholder={this.props.placeholder} />
        )
    }
}

export default Input