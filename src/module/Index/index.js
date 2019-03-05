import React from 'react';
import { Layout } from 'antd';
import { inject, observer } from 'mobx-react';
import SiderNav from '../../component/SiderNav/index';
import HeaderBar from '../../component/HeaderBar/index';
import ContentMain from '../../component/ContentMain/index';

const {
  Sider, Header, Content, Footer,
} = Layout;

const style = {
  header: collapsed => ({
    background: '#fff',
    position: 'fixed',
    zIndex: 3,
    width: collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)',
    left: collapsed ? 80 : 200,
    boxShadow: 'rgb(145, 213, 251) 0 5px 10px -5px',
  }),
  content: {
    marginTop: 64,
    // marginLeft: 200,
  },
  sider: {
    zIndex: 2,
  },
  footer: {
    // marginLeft: 200,
  },
};

@inject('UiStore')@observer
class Index extends React.Component {
  // onCollapse = debounce(() => {
  //   this.props.UiStore.toggleCollapse();
  // }, 1000)

  onHover= () => {
    this.props.UiStore.siderNavUnfold();
  }

  onLeave = () => {
    this.props.UiStore.siderNavFold();
  }

  render() {
    const { collapsed } = this.props.UiStore;
    return (
      <div>
        <Layout hasSider>
          <Sider collapsible collapsed={collapsed} onMouseEnter={this.onHover} onMouseLeave={this.onLeave} style={style.sider} theme="light">
            <SiderNav collapsed={collapsed} />
          </Sider>
          <Layout>
            <Header style={style.header(collapsed)}>
              <HeaderBar />
            </Header>
            <Content style={style.content}>
              <ContentMain />
            </Content>
            <Footer style={style.footer}>
              <div>Footer</div>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Index;
