import React, {Component} from 'react';
import './App.css';
import Data from './Mock/MockData';
import Container from './container/Container';
class App extends Component {
  render(){
    return(
      <div>
      <Container Content={this.props.Content}/>
      </div>
    )
  }
}
App.defaultProps = {
  Content : Data
}

export default App;
