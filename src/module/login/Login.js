import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';
import {message} from 'antd';
import './Login.css';
import '../../assets/iconfont/iconfont.css';
import http from '../../utils/fetch';

class Login extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      phone_number: '',
      password: '',
    };
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'phone_number':
        this.setState({
          phone_number: event.target.value,
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

  async handleSubmit() {
    const {history} = this.props;
    const {phone_number, password} = this.state;
    const user = {
      phone_number,
      password,
    };
    const res = await http.post('/api/users/', JSON.stringify(user));
    console.log(res);
    switch (res) {
      case 401:
        this.setState({
          password: ''
        });
        message.error('密码错误！');
        break;
      case 403:
        this.setState({
          phone_number: '',
          password: ''
        });
        message.warning('用户不存在！');
        break;
      case 500:
        message.error('服务器超时！');
        break;
      default:
        message.success('登录成功！');
        setTimeout(() => {
          history.push('./dashBoard');
        }, 1000);
        break;
    }
  }

  render() {
    const {phone_number, password} = this.state;
    return (
      <div className="login-background">
        <div className="login-wrap">
          <div className="login-wrap-left">
            <img src={require('../../assets/img/login/login.svg')} width="350px" height="300px"/>
          </div>
          <div className="login-wrap-right">
            <div className="banner-decoration"><span>A</span></div>
            <div className="login-form">
              <h1>Sign In</h1>
              <div style={{position: 'relative'}}>
                <i className="icon iconfont icon-shouji1"/>
                <input
                  className="login-input"
                  autoComplete="off"
                  placeholder="手机号"
                  name="phone_number"
                  onChange={this.handleChange.bind(this)}
                  value={phone_number}
                />
              </div>
              <div style={{position: 'relative'}}>
                <i className="icon iconfont icon-mima"/>
                <input
                  className="login-input"
                  type="password"
                  autoComplete="off"
                  placeholder="密码"
                  name="password"
                  onChange={this.handleChange.bind(this)}
                  value={password}
                />
              </div>
              <div className="login-submit">
                <button
                  className="login-button"
                  onClick={this.handleSubmit.bind(this)}
                >
                  登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
                </button>
                <Link to="./register"><div className="register-link">立即注册</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
