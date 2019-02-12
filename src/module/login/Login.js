import React from 'react';
import './Login.css';
import '../../assets/iconfont/iconfont.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'username':
        this.setState({
          username: event.target.value,
        });
        break;
      case 'password':
        this.setState({
          password: event.target.value,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-background">
        <div className="login-wrap">
          <div className="login-wrap-left">
            <img src={require('../../assets/img/login/login.svg')} width="350px" height="300px" />
          </div>
          <div className="login-wrap-right">
            <div className="banner-decoration"><span>A</span></div>
            <div className="login-form">
              <h1>Sign In</h1>
              <div style={{ position: 'relative' }}>
                <i className="icon iconfont icon-shouji1" />
                <input
                  className="login-input"
                  autoComplete="false"
                  placeholder="手机号"
                  name="username"
                  onChange={this.handleChange.bind(this)}
                  value={username}
                />
              </div>
              <div style={{ position: 'relative' }}>
                <i className="icon iconfont icon-mima" />
                <input
                  className="login-input"
                  type="password"
                  autoComplete="false"
                  placeholder="密码"
                  name="password"
                  onChange={this.handleChange.bind(this)}
                  value={password}
                />
              </div>
              <div className="login-submit">
                <button className="login-button">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                <div className="register-link">立即注册</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
