import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import {
  message, Form,
} from 'antd';
import './Register.css';
import '../../assets/iconfont/iconfont.css';
import http from '../../utils/fetch';

import fieldDecorator from '../../utils/getFieldDecorator';

class Register extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
  };

  handleSubmit(e) {
    e.preventDefault();
    const { form, history } = this.props;
    form.validateFieldsAndScroll(async (err, values) => {
      const user = values;
      if (!err) {
        user.school = user.school || 'BNUZ';
        const res = await http.post('/api/users/register/', user);
        switch (res.status) {
          case 401:
            message.warning(res.data.err);
            break;
          case 500:
            message.error('服务器超时！请稍后重试！');
            break;
          default:
            message.success('注册成功！');
            http.post('/api/users/', values).then(() => {
              setTimeout(() => {
                history.push('./dashBoard');
              }, 1000);
            });
            break;
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="register-background">
        <div className="register-wrap">
          <div className="register-wrap-left">
            <img src={require('../../assets/img/register/register.svg')} width="350px" height="300px" />
          </div>
          <div className="register-wrap-right">
            <div className="banner-decoration"><span>A</span></div>
            <div className="register-form">
              <h1>Sign Up</h1>
              <Form hideRequiredMark onSubmit={this.handleSubmit.bind(this)}>
                {fieldDecorator.map((item, index) => (
                  <Form.Item key={index}>
                    {getFieldDecorator(item.name, item.config)(
                      <div style={{ position: 'relative' }}>
                        <i className={`icon iconfont ${item.icon}`} />
                        <input
                          className="register-input"
                          autoComplete="off"
                          placeholder={item.placeholder}
                        />
                      </div>,
                    )}
                  </Form.Item>
                ))}
                <div className="register-submit">
                  <button
                    className="register-button"
                    type="submit"
                  >
                    注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册
                  </button>
                  <Link to="./login">
                    <div className="login-link">立即登录</div>
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

Register = Form.create()(Register);

export default withRouter(Register);
