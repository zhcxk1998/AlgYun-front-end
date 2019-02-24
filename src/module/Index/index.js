import React from 'react';
import { Layout } from 'antd';

import SiderNav from '../../component/SiderNav/index';
import ContentMain from '../../component/ContentMain/index';

const {
  Sider, Header, Content, Footer,
} = Layout;

const style = {
  header: {
    background: '#fff',
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    // marginLeft: 200,
  },
  content: {
    marginTop: 64,
    // marginLeft: 200,
  },
  sider: {

  },
  footer: {
    // marginLeft: 200,
  },
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={style.sider}>
            <SiderNav />
          </Sider>
          <Layout>
            <Header style={style.header}>
              <div>Header</div>
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
