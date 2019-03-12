import React from 'react';
import {
  Carousel, Row, Col, Divider, Icon, Tooltip, message,
} from 'antd';
import { Link } from 'react-router-dom';
import CustomBreadcrumb from '../../../component/CustomBreadcrumb/index';
import article from '../../../utils/getArticle';
import debounce from '../../../utils/debounce';
import './style.css';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
    };
  }

  componentDidMount() {
    this.setState({
      articleList: article,
    });
  }

  handleLike=debounce((id) => {
    const { articleList } = this.state;
    const articleItem = articleList.find(item => item.id === id);
    if (!articleItem.hasLiked) {
      articleItem.hasLiked = true;
      articleItem.likes += 1;
    } else {
      message.warning('你已经点赞过了哟！');
    }
    this.setState({
      articleList,
    });
  }, 250)

  renderAction(item = {}) {
    return (
      <div className="article-feature">
        <span key="like">
          <Tooltip title="点赞">
            <Icon
              type="like"
              theme={item.hasLiked ? 'twoTone' : 'outlined'}
              twoToneColor="#fa4b2a"
              onClick={() => this.handleLike(item.id)}
            />
          </Tooltip>
          <span style={{ paddingLeft: 4, cursor: 'auto' }}>
            {item.likes}
          </span>
        </span>
        <span key="view">
          <Icon
            type="eye"
            theme="twoTone"
            twoToneColor="#1890ff"
          />
          <span style={{ paddingLeft: 4, cursor: 'auto' }}>
            {item.views}
          </span>
        </span>
        <span key="author">
          <Link to="#" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://cdn.algbb.fun/avater/fat.jpg" width={24} height={24} alt="" />
            <span style={{ marginLeft: 6 }}>{item.author}</span>
          </Link>
        </span>
        <span key="time" className="article-time">{new Date().toLocaleTimeString()}</span>
      </div>
    );
  }

  renderArticleList() {
    const { articleList } = this.state;
    return (
      <div>
        {articleList.map((item, index) => (
          <div key={index}>
            <div className="article-item">
              <div className="article-wrap">
                <div className="article-title">
                  {item.title}
                </div>
                <div className="article-content">
                  {item.content}
                </div>
                {this.renderAction(item)}
              </div>
              <div className="article-thumbnail">
                <img src="//cdn.suisuijiang.com/ImageMessage/5b4ee8321b53ec11c8505de5_1551950753126.gif?width=300&height=300&imageView2/3/w/360/h/360" alt="" width="100%" />
              </div>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    );
  }

  render() {
    const container = document.getElementById('article-container');
    const tags = document.getElementById('article-tags');
    const style = {
      container: container ? { width: container.offsetWidth } : null,
      tags: tags ? { width: tags.offsetWidth } : null,
    };
    // console.log('render');
    return (
      <div style={{ position: 'relative', margin: 'auto' }}>
        <CustomBreadcrumb arr={['博客', '文章列表']} style={{ width: '100%' }} />
        <Row
          type="flex"
          justify="space-around"
          className="container"
          style={{
            background: '#fff', padding: '20px 0',
          }}
        >
          <Col sm={24} xl={16} className="article-container" id="article-container">
            <Row>
              {/* 下面设置xs={0}可以缩放到150%时候隐藏，有待考虑 */}
              <Col>
                <Carousel className="slider-container">
                  <div className="slider-wrap">
                    <img className="slider-img" src="//cdn.suisuijiang.com/ImageMessage/5b4ee8321b53ec11c8505de5_1544583720840.jpeg?width=1680&height=1050" width="100%" height="100%" alt="" />
                    <div className="slider-title">
                      一名精神患者逃出精神病院
                    </div>
                  </div>
                  <div className="slider-wrap">
                    <img className="slider-img" src="//cdn.suisuijiang.com/ImageMessage/5b4ee8321b53ec11c8505de5_1544583714480.jpeg?width=1920&height=1080" width="100%" height="100%" alt="" />
                    <div className="slider-title">
                      又有一个SB成功越狱了
                    </div>
                  </div>
                  <div className="slider-wrap">
                    <img className="slider-img" src="//cdn.suisuijiang.com/ImageMessage/5b4ee8321b53ec11c8505de5_1544583731929.png?width=1920&height=1080" width="100%" height="100%" alt="" />
                    <div className="slider-title">
                      精神病患者被抓回监狱了
                    </div>
                  </div>
                  <div className="slider-wrap">
                    <img className="slider-img" src="//cdn.suisuijiang.com/ImageMessage/5b4ee8321b53ec11c8505de5_1551024905649.png?width=756&height=166" width="100%" height="100%" alt="" />
                    <div className="slider-title">
                      精神病患者被抓回监狱了
                    </div>
                  </div>
                </Carousel>
              </Col>
            </Row>
            <h2 className="article-recommend">
                热门推荐&nbsp;
              <Icon type="fire" theme="twoTone" twoToneColor="red" />
              <Divider />
            </h2>
            {this.renderArticleList()}
          </Col>
          <Col sm={0} xl={6} className="article-tags" id="article-tags">
            这
            <br />
            里
            <br />
            是
            <br />
            标
            <br />
            签
            <br />
            栏
          </Col>
        </Row>
      </div>
    );
  }
}
export default Article;
