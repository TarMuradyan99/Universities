import React, { Component } from 'react';
import './App.css';
import Wrapper from './Ui/Wrapper/Wrapper';
import Card from './Ui/Card/Card'
import Input from './Component/Input/Input';
import Button from './Component/Button/Button';
import List from './Component/List/List';
import Listitem from './Component/Listitem/Listitem';
import classes from "./Global.module.css"
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      universe: []
    }
    this.myRef = React.createRef('')
  }
  
findUniverse=() => {
  fetch(`http://universities.hipolabs.com/search?country=${this.myRef.current.value}`)
  .then(data => data.json())
  .then(res => this.setState({
    universe: res
  }))
  console.log(this.state.universe)
}

  render(){
    return(
      <Wrapper>
        <Card>
          <Input className={classes.myInput} propsref={this.myRef}/>
          <Button onClick={this.findUniverse} className={classes.myButton}>Click Here</Button>
          <List>
            {this.state.universe.map(el=> {
              return <Listitem key={Math.random() } className = {classes.myuniver}>
                {el.alpha_two_code}
                {el.country}
                {el.name}
                {el.web_pages}
              </Listitem>
            })}
          </List>
        </Card>
      </Wrapper>
    )
  }
}
export default App