import React from 'react';
import MarketsItem from './MarketsItem';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import './Main.css';
import 'antd/dist/antd.css';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


const Home = () =>
  <div>
    <Layout>
      <Header className="header">Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>


class Main extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Header className="header" style={{position: 'fixed', top: 0, zIndex: 999, width: '100%'}}>
              <div className="logo"/>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{lineHeight: '64px', width: '100%'}}
              >
                <Menu.Item key="1"><Link to="/markets">Markets</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/home">Home</Link></Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Layout style={{padding: '24px 0', background: '#fff'}}>
                <Sider width={200} style={{background: '#fff'}}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%'}}
                  >
                    <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                      <Menu.Item key="1">option1</Menu.Item>
                      <Menu.Item key="2">option2</Menu.Item>
                      <Menu.Item key="3">option3</Menu.Item>
                      <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                      <Menu.Item key="5">option5</Menu.Item>
                      <Menu.Item key="6">option6</Menu.Item>
                      <Menu.Item key="7">option7</Menu.Item>
                      <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                      <Menu.Item key="9">option9</Menu.Item>
                      <Menu.Item key="10">option10</Menu.Item>
                      <Menu.Item key="11">option11</Menu.Item>
                      <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content style={{padding: '0 24px', minHeight: 280}}>
                  <Route path="/home" component={Home}/>
                  <Route path="/markets" component={MarketsItem}/>
                </Content>
              </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </div>
      </Router>
    )
  }
}

export default Main;
