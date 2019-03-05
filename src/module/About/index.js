import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 6,
      values: ['', '', '', '', '', ''],
      info: [{
        name: '0',
        value: '',
        msg: '',
      },
      {
        name: '1',
        value: '',
        msg: '',
      },
      {
        name: '2',
        value: '',
        msg: '',
      },
      {
        name: '3',
        value: '',
        msg: '',
      },
      {
        name: '4',
        value: '',
        msg: '',
      }, {
        name: '5',
        value: '',
        msg: '',
      }],
    };
  }

  handleInc() {
    const { info, values } = this.state;
    let { id } = this.state;
    info.push({
      name: `${id}`,
      value: '',
      msg: '',
    });
    values.push('');
    id += 1;
    this.setState({
      info,
      values,
      id,
    });
  }

  handleChange(index, e) {
    const { info, values } = this.state;
    values[index] = e.target.value;

    info.map((item) => {
      if (item.name === e.target.name) {
        item.value = e.target.value;
      }
      if (item.value) {
        if (item.value.length < 4) {
          item.msg = '太短了';
        } else {
          item.msg = 'good';
        }
      } else {
        item.msg = '';
      }
    });

    for (let i = 0; i < values.length - 1; i += 1) {
      for (let j = i + 1; j < values.length; j += 1) {
        if (values[i] === values[j] && values[i].length >= 4 && values[j].length >= 4) {
          info[i].msg = '重复';
          info[j].msg = '重复';
        }
      }
    }
    this.setState({
      info,
      values,
    });
  }

  render() {
    const { info } = this.state;
    return (
      <div>
        {info.map((item, index) => (
          <div key={index}>
            <input name={item.name} onChange={this.handleChange.bind(this, index)} />
            <span>{item.msg}</span>
          </div>
        ))}
        <button onClick={this.handleInc.bind(this)}>点我加输入框</button>
      </div>
    );
  }
}

export default About;
