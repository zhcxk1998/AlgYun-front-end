import React from 'react';
import {Layout, Menu, Breadcrumb, Icon, Table, Divider, Tag, Card, Col, Row} from 'antd';
import axios from 'axios';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const columns = [{
  title: 'create_time',
  dataIndex: 'create_time',
  key: 'create_time',
  // render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'views',
  dataIndex: 'views',
  key: 'views',
}, {
  title: 'seller',
  dataIndex: 'seller',
  key: 'seller',
}, {
  title: 'name',
  key: 'name',
  dataIndex: 'name',
}, {
  title: 'c_detail',
  key: 'c_detail',
  dataIndex: 'c_detail',
  render: c_detail => (
    <div dangerouslySetInnerHTML={{__html: c_detail}}>
    </div>
  )
}, {
  title: 'id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: 'last_mod_time',
  dataIndex: 'last_mod_time',
  key: 'last_mod_time',
}, {
  title: 'classification',
  dataIndex: 'classification',
  key: 'classification',
}];

class MarketsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [],
      part_time_job: [],
      notice: [],
      helps: [],
      markets: [],
    };
  }

  get = () => {
    axios.get('https://algyun.cn:81/').then(res => {
      return res.data.result;
    }).then(data => {
      Object.keys(data).map(index => {
        this.setState({
          [index]: Object.values(data[index])
        })
      })
    }).then(() => console.log(this.state))
  };

  componentDidMount() {
    this.get()
    // console.log(this.state.id)
  }

  render() {
    const {markets} = this.state;
    return (
      <div>
        <Table columns={columns} dataSource={Object.values(markets)}/>
        <div style={{background: '#ECECEC', padding: '30px'}}>
          <Row gutter={16}>
            {markets.map((item, index) => {
              return (
                <Col span={8} style={{margin: '20px 0'}}>
                  <Card title={item.id + '\t' + item.name + '\tview: ' + item.views} bordered={false}>
                    <h3>{item.classification}</h3>
                    <h6>{item.create_time}</h6>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    )
  }
}

export default MarketsItem;
