import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from './module/welcome/WelcomePage';
import Login from './module/login/Login';
import Register from './module/register/Register';
import DashBoard from './module/dashBoard/DashBoard';
import Blog from './module/blog/Blog';

import './style.css';
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={WelcomePage}
            />
            <Route path="/login" component={Login}/>
            <Route
              path="/register"
              component={Register}
            />
            <Route path="/dashBoard" component={DashBoard}/>
            <Route
              path="/blog"
              component={Blog}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
