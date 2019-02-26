import React from 'react';
import { Switch, withRouter, Redirect ,Route} from 'react-router-dom';
import LoadableComponent from '../../utils/LoadabelComponent';
import PrivateRoute from '../PrivateRoute/index';

const Editor = LoadableComponent(() => import('../../module/Blog/Editor/index'));
const Home=LoadableComponent(()=>import('../../module/Home/index'));

@withRouter
class ContentMain extends React.Component {
  render() {
    return (
      <div style={{ padding: 16, position: 'relative' }}>
        <Switch>
          <PrivateRoute exact path="/index/home" component={Home} />>
          <PrivateRoute exact path="/index/blog/entry/editor" component={Editor} />

          <Redirect exact from="/index" to="/index/home" />
        </Switch>
      </div>
    );
  }
}

export default ContentMain;
