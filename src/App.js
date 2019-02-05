import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import WelcomePage from './module/welcome/WelcomePage';
import './style.css';
import 'antd/dist/antd.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={WelcomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
