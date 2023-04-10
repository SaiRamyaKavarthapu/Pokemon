import React, {Component} from 'react';
import './App.css';
import Data from './mock/MockData';
class App extends Component {
  render(){
    return(
      <div>

      </div>
    )
  }
}
App.defaultProps = {
  Content: Data
}
export default App;
