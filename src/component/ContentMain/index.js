import React from 'react';
import {
  Switch, withRouter, Redirect,
} from 'react-router-dom';
import LoadableComponent from '../../utils/LoadabelComponent';
import PrivateRoute from '../PrivateRoute/index';

const Home = LoadableComponent(() => import('../../module/Home/index'));
const Article = LoadableComponent(() => import('../../module/Blog/Article/index'));
const Editor = LoadableComponent(() => import('../../module/Blog/Editor/index'));
const About = LoadableComponent(() => import('../../module/About/index'));

@withRouter
class ContentMain extends React.Component {
  render() {
    return (
      <div style={{ padding: 16, position: 'relative' }}>
        <Switch>
          <PrivateRoute exact path="/index/home" component={Home} />

          <PrivateRoute exact path="/index/blog/entry/article" component={Article} />
          <PrivateRoute exact path="/index/blog/entry/editor" component={Editor} />

          <PrivateRoute exact path="/index/about" component={About} />
          <Redirect exact from="/index" to="/index/home" />
        </Switch>
      </div>
    );
  }
}

export default ContentMain;
