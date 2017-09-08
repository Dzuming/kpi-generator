import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import './assets/scss/Chart.scss';

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
