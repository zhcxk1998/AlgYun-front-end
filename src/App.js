import React, {Component} from 'react';
import Main from './component/Main';
import WelcomePage from './component/welcome/WelcomePage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './style.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}/>
          <Route path="/welcome" component={WelcomePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
