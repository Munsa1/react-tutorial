import React, { Component } from 'react'

 class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0  
    }
  }
  increament(){
     this.setState({
       count: this.setState.count + 1

     })
     console.log(this.state.count)
  }
  render() {
    return (<div>
      
      <div>Count - {this.state.count}</div>
      <button onClick = {()=> this.increament()}>Increase</button>
      
      </div>
     
    )
  }
}

export default Counter
