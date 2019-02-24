import React from 'react';
import {
  Carousel, Row, Col, Tooltip,
} from 'antd';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import introduction from '../../utils/getIntroduction';
import feature from '../../utils/getFeature';
import debounce from '../../utils/debounce';

import 'rc-texty/assets/index.css';
import './style.css';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
  }

  componentDidMount() {
    window.onscroll = debounce(() => {
      this.setState({
        scrollY: window.scrollY,
      });
    }, 100);
  }

  handleClick(direction) {
    switch (direction) {
      case 'left':
        this.slider.prev();
        break;
      case 'right':
        this.slider.next();
        break;
      default:
        break;
    }
  }

  renderBanner() {
    return (
      <QueueAnim
        className="banner"
        key="banner"
        component={Row}
        componentProps={{ gutter: 32 }}
        delay={700}
        duration={1000}
      >
        <Col span={12} key="img" className="banner-img">
          <img src={require('../../assets/img/banner.png')} alt="" width="500px" height="350px" />
        </Col>
        <Col span={12} className="wrap" key="wrap">
          <Texty
            delay={200}
            duration={300}
            type="scaleBig"
            mode="random"
            className="wrap-title"
            key="title"
          >
            ALGYUN
          </Texty>
          <QueueAnim delay={600}>
            <Texty duration={150} type="mask-top" mode="reverse" className="wrap-content" key="content1">
              Make Fun Every Day
            </Texty>
            <Texty duration={150} type="mask-bottom" mode="smooth" className="wrap-content" key="content2">
              用心创造快乐,没钱玩个锤子
            </Texty>
            <button type="button" className="wrap-button" key="button">Learn More</button>
          </QueueAnim>
        </Col>
      </QueueAnim>
    );
  }

  renderIntroduction() {
    const { featureIndex, show } = this.state;
    return (
      <OverPack playScale={0.4} localtion="introduction">
        <QueueAnim
          className="introduction"
          key="introduction"
          ease="easeOutQuart"
          leaveReverse
          type="bottom"
        >
          <div className="title" key="title">以学生为主的多功能平台</div>
          <div className="title-decoration" key="title-decoration" />
          <QueueAnim
            type="bottom"
            className="introduction-item-group"
            component={Row}
            componentProps={{ gutter: 20 }}
            key="introduction-item-group"
          >
            {introduction.map((item, index) => (
              <QueueAnim key={`${index}tip`} type="scaleBig">
                <Tooltip placement="bottom" title={item.info} autoAdjustOverflow overlayClassName="introduction-tip">
                  <QueueAnim
                    component={Col}
                    componentProps={{ span: 6 }}
                    type="scaleBig"
                    className="introduction-item"
                    key={index}
                  >
                    <img src={item.img} key="item-img" alt="" />
                    <div className="introduction-item-content" key="item-content">{item.title}</div>
                    <div className="introduction-item-round" key="item-round" />
                  </QueueAnim>
                </Tooltip>
              </QueueAnim>
            ))}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    );
  }

  renderSlider() {
    return (
      <OverPack location="slider" playScale={0.4}>
        <QueueAnim className="slider" key="slider" type="bottom" leaveReverse ease="easeOutQuart">
          <div className="title" key="title">在这里收获更多</div>
          <div className="title-decoration" key="title-decoration" />
          <div key="slider-img">
            <Carousel
              autoplay
              ref={(el) => {
                this.slider = el;
              }}
            >
              {introduction.map((item, index) => (
                <img className="slider-img" key={index} src={item.slider} alt="" />
              ))}
            </Carousel>
          </div>
          <div className="change-slider left" key="left" onClick={this.handleClick.bind(this, 'left')} />
          <div className="change-slider right" key="right" onClick={this.handleClick.bind(this, 'right')} />
        </QueueAnim>
      </OverPack>
    );
  }

  renderFeature() {
    return (
      <OverPack location="feature" playScale={0.6}>
        <QueueAnim className="feature" key="feature" type="bottom" leaveReverse ease="easeOutQuart">
          <div className="title" key="title">体验全新校园生活</div>
          <div className="title-decoration" key="title-decoration" />
          <QueueAnim key="feature-item" type="bottom">
            {feature.map((item, index) => (
              <Row className="feature-item" type="flex" key={index}>
                <Col span={12} order={index % 2 == 0 ? 2 : 1}>
                  <img className="feature-img" src={item.img} alt="" />
                </Col>
                <Col span={12} order={index % 2 == 0 ? 1 : 2}>
                  <div className="feature-info">
                    <div className="feature-decoration" />
                    <div className="feature-title">{item.title}</div>
                    <div className="feature-content">
                      {/* 未来可能要加装饰 */}
                      <div className="feature-content-info">{item.info}</div>
                    </div>
                    <button type="button" className="feature-button">了解更多</button>
                  </div>
                </Col>
              </Row>
            ))}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    );
  }

  renderFooter() {
    return (
      <OverPack location="footer" playScale={0.4}>
        <QueueAnim key="footer" className="welcome-footer" type="alpha" leaveReverse ease="easeOutQuart">
          <div key="footer-slogan" className="footer-slogan">
            <Texty
              className="footer-title"
              key="footer-title"
              type="scaleBig"
            >
              还在犹豫什么,赶紧加入我们吧
            </Texty>
            <button type="button" className="footer-button" key="footer-button">立即登录</button>
          </div>
          <QueueAnim key="footer-wrap" className="footer-wrap" type="bottom" leaveReverse ease="easeOutQuart">
            <Row className="footer-content">
              <QueueAnim type="bottom" leaveReverse ease="easeOutQuart" delay={300}>
                <Col span={5} className="footer-content-item" key="about">
                  <div className="footer-content-title">关于我们 -</div>
                  <div className="footer-content-link">ALGYun</div>
                  <div className="footer-content-link">GitHub</div>
                </Col>
                <Col span={5} className="footer-content-item" key="contact">
                  <div className="footer-content-title">联系我们 -</div>
                  <div className="footer-content-link">反馈和建议</div>
                  <div className="footer-content-link">加入我们</div>
                  <div className="footer-content-link">疑难解惑</div>
                </Col>
                <Col span={5} className="footer-content-item" key="more">
                  <div className="footer-content-title">更多作品 -</div>
                  <div className="footer-content-link">BB聊天室</div>
                  <div className="footer-content-link">查课小程序</div>
                  <div className="footer-content-link">抽奖小程序</div>
                  <div className="footer-content-link">幸运大转盘</div>
                  <div className="footer-content-link">股票实时查询</div>
                  <div className="footer-content-link">星座占卜</div>
                  <div className="footer-content-link">化学结构体比对</div>
                </Col>
                <Col span={9} className="footer-content-item" key="qrcode">
                  <img
                    src="https://cdn.suisuijiang.com/ImageMessage/5b4ee8321b53ec11c8505de5_1549366687785.png?width=270&height=270"
                    alt=""
                  />
                  <div className="footer-qrcode">（ 扫一扫获取更多信息 ）</div>
                </Col>
              </QueueAnim>
            </Row>
            <div className="footer-copyright">
              Copyright © 2018 - 2019 ALGYun.
            </div>
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    );
  }

  render() {
    const { scrollY } = this.state;
    return (
      <QueueAnim type="scaleBig" duration={800} style={{ width: '100vw', height: '100vh' }}>
        <div className={scrollY > 1 ? 'nav change-nav' : 'nav'} key="navbar">
          <img src={require('../../assets/img/logo.png')} width="80px" height="30px" />
          <div className="link-group">
            <div className="link-item" key="1">钟霆融</div>
            <div className="link-item" key="2">钟霆融</div>
            <div className="link-item" key="3">钟霆融</div>
            <div className="link-item" key="4">钟霆融</div>
            <div className="link-item" key="5">钟霆融</div>
          </div>
          <Link to="/login">
            <button className="action-login">登录</button>
          </Link>
        </div>
        <div className="background" key="background">
          {this.renderBanner()}
        </div>
        <div id="introduction" key="introduction">
          {this.renderIntroduction()}
        </div>
        <div id="slider" key="slider">
          {this.renderSlider()}
        </div>
        <div id="feature" key="feature">
          {this.renderFeature()}
        </div>
        <div id="footer" key="footer">
          {this.renderFooter()}
        </div>
      </QueueAnim>
    );
  }
}

export default WelcomePage;
