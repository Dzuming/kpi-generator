import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './containers/Dashboard';
class App extends Component {
  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    );
  }
}
export default App;
