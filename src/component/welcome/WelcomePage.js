import React from 'react';
import './WelcomePage.css';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="background">
        <div className="nav">
          <img src={require('../../assets/img/logo.png')} width="80px" height="30px"/>
          <div className="link-group">
            <div className="link-item">钟霆融</div>
            <div className="link-item">草拟吗</div>
            <div className="link-item">钟霆融</div>
            <div className="link-item">草拟吗</div>
            <div className="link-item">钟霆融</div>

          </div>
          <div className="action">
            {/*<div className="action-login">LogIn</div>*/}
            <button className="action-signup">Sign In</button>
          </div>
        </div>

        <div className="banner">
          <div className="banner-decoration"></div>
          <img src={require('../../assets/img/banner.png')} width="500px" height="350px"/>
          <div className="banner-divide"></div>
          <div className="wrap">
            <div className="wrap-title">ALGYUN</div>
            <div className="wrap-content">Make Fun Every Day<br/>用心创造快乐,没钱玩你妈比</div>
            <button className="wrap-button">Learn More</button>
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomePage;
