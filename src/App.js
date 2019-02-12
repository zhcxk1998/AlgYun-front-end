import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './module/welcome/WelcomePage';
import Login from './module/login/Login';
import './style.css';
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
