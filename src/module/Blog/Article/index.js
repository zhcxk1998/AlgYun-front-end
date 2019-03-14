import React from 'react';
import {
  Carousel, Row, Col, Divider, Icon, Tooltip, message,
} from 'antd';
import { Link } from 'react-router-dom';
import CustomBreadcrumb from '../../../component/CustomBreadcrumb/index';
import Slider from '../../../utils/getSlider';
import article from '../../../utils/getArticle';
import tags from '../../../utils/getTags';
import recommend from '../../../utils/getRecommend';
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

  renderSlider() {
    return (
      <Carousel className="slider-container">
        {Slider.map(item => (
          <div className="slider-wrap">
            <Link to={item.link}>
              <img className="slider-img" src={item.img} width="100%" height="100%" alt="" />
              <div className="slider-title">{item.title}</div>
            </Link>
          </div>
        ))}
      </Carousel>
    );
  }

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
          <Link to={item.link} className="article-author">
            <img src={item.avater} width={24} height={24} alt="" />
            <span style={{ marginLeft: 6 }}>{item.author}</span>
          </Link>
        </span>
        <span key="time" className="article-time">{item.time}</span>
      </div>
    );
  }

  renderArticleList() {
    const { articleList } = this.state;
    return (
      <div>
        <h2 className="article-hot">
                今日热门&nbsp;
          <Icon type="fire" theme="twoTone" twoToneColor="red" />
          <Divider />
        </h2>
        {articleList.map((item, index) => (
          <div key={index}>
            <Link to={item.link} style={{ textDecoration: 'none' }}>
              <div className="article-item">
                <div className="article-wrap">
                  <div className="article-title">
                    {item.title}
                  </div>
                  <div className="article-content">
                    {item.content}
                  </div>
                </div>
                <div className="article-thumbnail">
                  <img src={item.thumbnail} width="100%" alt="" />
                </div>
              </div>
            </Link>
            {this.renderAction(item)}
            <Divider />
          </div>
        ))}
      </div>
    );
  }

  renderTags() {
    return (
      <div className="tags-wrap">
        <h3 className="article-sider-title">
          <span>热门标签</span>
          <Link to="#">更多</Link>
        </h3>
        <div className="tags-container">
          {tags.map(item => (
            <Link to={item.link} className="tag-link">{item.tag}</Link>
          ))}
        </div>
      </div>
    );
  }

  renderRecommend() {
    return (
      <div className="article-recommend">
        <h3 className="article-sider-title">
          <span>小编推荐</span>
          <Link to="#">更多</Link>
        </h3>
        <div className="recommend-container">
          {recommend.map(item => (
            <div className="recommend-wrap">
              <Link to={item.link}>
                <img className="recommend-thumbnail" src={item.thumbnail} width="100%" alt="" />
                <div className="recommend-content">{item.content}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <CustomBreadcrumb arr={['博客', '文章列表']} />
        <Row
          type="flex"
          justify="space-between"
          className="container"
        >
          <Col sm={24} xl={16} className="article-container">
            {this.renderSlider()}
            {this.renderArticleList()}
          </Col>
          <Col sm={0} xl={6} className="article-sider">
            {this.renderTags()}
            {this.renderRecommend()}
          </Col>
        </Row>
      </div>
    );
  }
}
export default Article;
