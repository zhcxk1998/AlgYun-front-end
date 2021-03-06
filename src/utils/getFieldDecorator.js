module.exports = [
  // {
  //   name: 'phone_number',
  //   icon: 'icon-shouji1',
  //   placeholder: '手机号',
  //   config: {
  //     rules: [{
  //       required: true, message: '请输入手机号！',
  //     }],
  //     initialValue: '',
  //   },
  // },
  {
    name: 'email',
    type: 'text',
    icon: 'icon-youxiang',
    placeholder: '邮箱',
    config: {
      rules: [
        {
          required: true, message: '请输入邮箱！',
        },
        {
          type: 'email', message: '请输入合法的邮箱地址！',
        },
      ],
      initialValue: '',
    },
  },
  {
    name: 'password',
    type: 'password',
    icon: 'icon-mima',
    placeholder: '密码',
    config: {
      rules: [{
        required: true, message: '请输入密码！',
      }],
      initialValue: '',
    },
  },
  {
    name: 'nickname',
    type: 'text',
    icon: 'icon-xingming',
    placeholder: '昵称',
    config: {
      rules: [{
        required: true, message: '请输入昵称！',
      }],
      initialValue: '',
    },
  },
  {
    name: 'school',
    type: 'text',
    icon: 'icon-xuexiao',
    placeholder: '学校（不填则默认为BNUZ）',
    config: {
      rules: [],
      initialValue: 'BNUZ',
    },
  },
];
