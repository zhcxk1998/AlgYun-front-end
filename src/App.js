import React from 'react';
import {
  HashRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import LoadableComponent from './utils/LoadabelComponent';
import PrivateRoute from './component/PrivateRoute/index';
// 不可以按需加载要进行路由渲染的组件
import Index from './module/Index/index';
import WelcomePage from './module/WelcomePage/index';

import './style.css';
import 'antd/dist/antd.css';
import store from './store/index';

// 按需加载组件
const Login = LoadableComponent(() => import('./module/Login/index'));
const Register = LoadableComponent(() => import('./module/Register/index'));

const App = () => (
  <div>
    <Router>
      <Provider {...store}>
        <Switch>
          <Route exact path="/welcome" component={WelcomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <PrivateRoute path="/index" component={Index} />

          <Redirect exact from="/" to="/welcome" />
        </Switch>
      </Provider>
    </Router>
  </div>
);


export default App;
