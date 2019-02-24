import React from 'react';
import {
  HashRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import LoadableComponent from './utils/LoadabelComponent';
import PrivateRoute from './component/PrivateRoute/index';

import './style.css';
import 'antd/dist/antd.css';

// 按需加载组件
const WelcomePage = LoadableComponent(() => import('./module/WelcomePage/index'));
const Login = LoadableComponent(() => import('./module/Login/index'));
const Register = LoadableComponent(() => import('./module/Register/index'));
const Index = LoadableComponent(() => import('./module/Index/index'));

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <PrivateRoute path="/index" component={Index} />

        <Redirect exact from="/" to="/welcome" />
      </Switch>
    </Router>
  </div>
);


export default App;
