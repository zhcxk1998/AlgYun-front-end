import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { message, Form } from 'antd';
import './Login.css';
import '../../assets/iconfont/iconfont.css';
import http from '../../utils/fetch';

import fieldDecorator from '../../utils/getFieldDecorator';

class Login extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  handleSubmit(e) {
    e.preventDefault();
    const { form, history } = this.props;
    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const res = await http.post('/api/users/', values);
        switch (res.status) {
          case 401:
            this.setState({
              password: '',
            });
            message.error('密码错误！');
            break;
          case 403:
            this.setState({
              phone_number: '',
              password: '',
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
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
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
              <Form hideRequiredMark onSubmit={this.handleSubmit.bind(this)}>
                {fieldDecorator.slice(0, 2).map((item, index) => (
                  <Form.Item key={index}>
                    {getFieldDecorator(item.name, item.config)(
                      <div style={{ position: 'relative', margin: '10px 0' }}>
                        <i className={`icon iconfont ${item.icon}`} />
                        <input
                          className="login-input"
                          autoComplete="off"
                          placeholder={item.placeholder}
                        />
                      </div>,
                    )}
                  </Form.Item>
                ))}
                <div className="login-submit">
                  <button
                    className="login-button"
                    type="submit"
                  >
                    登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
                  </button>
                  <Link to="./register">
                    <div className="register-link">立即注册</div>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login = Form.create()(Login);

export default withRouter(Login);
