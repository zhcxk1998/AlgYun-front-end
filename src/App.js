import React from 'react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
import LoadableComponent from './utils/LoadabelComponent';

import './style.css';
import 'antd/dist/antd.css';

// 按需加载组件
const WelcomePage = LoadableComponent(() => import('./module/welcome/WelcomePage'));
const Login = LoadableComponent(() => import('./module/login/Login'));
const Register = LoadableComponent(() => import('./module/register/Register'));
const DashBoard = LoadableComponent(() => import('./module/dashBoard/DashBoard'));
const Blog = LoadableComponent(() => import('./module/blog/Blog'));

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashBoard" component={DashBoard} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  </div>
);


export default App;
