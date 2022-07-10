import { Component } from "react";
import Wrapper from "../../Ui/Wrapper/Wrapper";

class Listitem extends Component{
    render(){
        return(
            <Wrapper>
            <li className={this.props.className}>{this.props.children}</li>
            <br/>
            </Wrapper>
        )
    }
}
export default Listitem