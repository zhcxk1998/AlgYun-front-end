import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';
import {message} from 'antd';
import './Register.css';
import '../../assets/iconfont/iconfont.css';
import http from '../../utils/fetch';

class Register extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      phone_number: '',
      password: '',
      email: '',
      nickname: '',
      school: '',
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
      case 'email':
        this.setState({
          email: event.target.value,
        });
        break;
      case 'nickname':
        this.setState({
          nickname: event.target.value,
        });
        break;
      case 'school':
        this.setState({
          school: event.target.value,
        });
        break;
      default:
        break;
    }
  }

  async handleSubmit() {
    const {history} = this.props;
    const {
      phone_number, password, email, nickname, school,
    } = this.state;
    const user = {
      phone_number,
      password,
      email,
      nickname,
      school: school || 'BNUZ',
    };
    console.log(user)
    // console.log(this.state);
    // const res = await http.post('/api/users/register/', JSON.stringify(user));
    // console.log(res);
    // switch (res) {
    //   case 401:
    //     this.setState({
    //       password: '',
    //     });
    //     message.error('密码错误！');
    //     break;
    //   case 403:
    //     this.setState({
    //       phone_number: '',
    //       password: '',
    //     });
    //     message.warning('用户不存在！');
    //     break;
    //   case 500:
    //     message.error('服务器超时！');
    //     break;
    //   default:
    //     message.success('登录成功！');
    //     setTimeout(() => {
    //       history.push('./dashBoard');
    //     }, 1000);
    //     break;
    // }
  }

  render() {
    const {
      phone_number, password, email, nickname, school,
    } = this.state;
    return (
      <div className="register-background">
        <div className="register-wrap">
          <div className="register-wrap-left">
            <img src={require('../../assets/img/register/register.svg')} width="350px" height="300px"/>
          </div>
          <div className="register-wrap-right">
            <div className="banner-decoration"><span>A</span></div>
            <div className="register-form">
              <h1>Sign Up</h1>
              <div style={{position: 'relative'}}>
                <i className="icon iconfont icon-shouji1"/>
                <input
                  className="register-input"
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
                  className="register-input"
                  autoComplete="new-password"
                  placeholder="密码"
                  type="password"
                  name="password"
                  onChange={this.handleChange.bind(this)}
                  value={password}
                />
              </div>
              <div style={{position: 'relative'}}>
                <i className="icon iconfont icon-youxiang"/>
                <input
                  className="register-input"
                  autoComplete="off"
                  placeholder="邮箱"
                  name="email"
                  onChange={this.handleChange.bind(this)}
                  value={email}
                />
              </div>
              <div style={{position: 'relative'}}>
                <i className="icon iconfont icon-xingming"/>
                <input
                  className="register-input"
                  autoComplete="off"
                  placeholder="昵称"
                  name="nickname"
                  onChange={this.handleChange.bind(this)}
                  value={nickname}
                />
              </div>
              <div style={{position: 'relative'}}>
                <i className="icon iconfont icon-xuexiao"/>
                <input
                  className="register-input"
                  autoComplete="off"
                  placeholder="学校（不填则默认是BNUZ）"
                  name="school"
                  onChange={this.handleChange.bind(this)}
                  value={school}
                />
              </div>
              <div className="register-submit">
                <button
                  className="register-button"
                  onClick={this.handleSubmit.bind(this)}
                >
                  注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册
                </button>
                <Link to="./login"><div className="login-link">立即登录</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
