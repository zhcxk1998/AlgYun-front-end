import React from 'react';
import { inject, observer } from 'mobx-react';
import CustomMenu from '../CustomMenu/index';
import './style.css';


const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/index/home',
  },
  {
    title: '二手市场',
    icon: 'shop',
    key: '/index/market',
    subs: [
      { key: '/index/market/list', title: '商品列表', icon: '' },
      { key: '/index/market/release', title: '出售商品', icon: '' },
    ],
  },
  {
    title: '互帮互助',
    icon: 'heart',
    key: '/index/help',
    subs: [
      { key: '/index/help/list', title: '求助列表', icon: '' },
      { key: '/index/help/release', title: '发布求助', icon: '' },
    ],
  },
  {
    title: '兼职信息',
    icon: 'search',
    key: '/index/partime',
    subs: [
      { key: '/index/partime/list', title: '兼职列表', icon: '' },
      { key: '/index/partime/release', title: '发布兼职', icon: '' },
    ],
  },
  {
    title: '论坛博客',
    icon: 'edit',
    key: '/index/blog',
    subs: [
      {
        key: '/index/blog/entry',
        title: '博客',
        icon: '',
        subs: [
          { key: '/index/blog/entry/article', title: '文章列表', icon: '' },
          { key: '/index/blog/entry/editor', title: '文章编辑器', icon: '' },
        ],
      },
      { key: '/index/blog/chat', title: '聊天室', icon: '' },
    ],
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/index/about',
  },
];

@inject('UiStore')@observer
class SiderNav extends React.Component {
  render() {
    const { collapsed } = this.props.UiStore;
    return (
      <div className="sider-nav">
        {collapsed ? (
          <div style={{
            background: 'rgba(0,0,0,.1)', margin: 16, width: 48, height: 32,
          }}
          />
        ) : <img src="https://cdn.algbb.fun/ImageMessages/BB_1551018466354_width_1275_height_609_" width={80} alt="" style={{ margin: '10px 24px' }} />}

        <CustomMenu menus={menus} />
      </div>
    );
  }
}

export default SiderNav;
