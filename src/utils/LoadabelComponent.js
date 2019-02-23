import React from 'react';
import Loadable from 'react-loadable';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class LoadingPage extends React.Component {
  componentWillMount() {
    // 显示顶部进度条
    NProgress.start();
  }

  componentWillUnmount() {
    NProgress.done();
  }

  render() {
    return (
      // 这里可以放上加载动画等组件
      <div style={{ background: '#fff', width: '100vw', height: '100vh' }} />
    );
  }
}

const LoadableComponent = component => Loadable({
  loader: component,
  loading: () => <LoadingPage />,
});

export default LoadableComponent;
