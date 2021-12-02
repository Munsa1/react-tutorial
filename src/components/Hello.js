import React, {Component} from 'react';

class Hello extends Component {
 render(props){
   return <h1>Hello "Your Name" {this.props.name}</h1>
   console.log({props});
 }
} 
export default Hello;