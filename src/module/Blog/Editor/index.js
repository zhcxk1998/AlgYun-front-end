/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Modal, Form, Button, Input, Select, Upload, Icon,
} from 'antd';
import PropTypes from 'prop-types';
import { ContentUtils } from 'braft-utils';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';
import 'braft-extensions/dist/color-picker.css';
import 'braft-extensions/dist/table.css';
import './style.css';

import BraftEditor from 'braft-editor';

import CodeHighlighter from 'braft-extensions/dist/code-highlighter';
import ColorPicker from 'braft-extensions/dist/color-picker';
import HeaderId from 'braft-extensions/dist/header-id';
import Table from 'braft-extensions/dist/table';
import Markdown from 'braft-extensions/dist/markdown';

import 'prismjs/components/prism-java';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-python';

import options from '../../../utils/getEditorOptions';
import debounce from '../../../utils/debounce';

const { Option } = Select;

BraftEditor.use(CodeHighlighter(options));
BraftEditor.use(ColorPicker());
BraftEditor.use(HeaderId());
BraftEditor.use(Table({
  defaultColumns: 5,
  defaultRows: 3,
}));
BraftEditor.use(Markdown());

@Form.create()
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState(null),
      visible: false,
    };
  }

  componentDidMount() {
  }

  handleEditorChange = debounce((editorState) => {
    this.setState({
      editorState,
    });
  }, 250);


  preview = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log(values);
      }
    });
  };

  // 可搭配Antd的Upload组件进行上传至七牛云，目前暂时先用base64编码代替，目前阶段先禁止上传视频文件
  uploadHandler = (param) => {
    if (!param.file) {
      return false;
    }

    param.success({
      url: URL.createObjectURL(param.file),
      meta: {
        id: new Date().getTime(),
        title: new Date().getTime(),
        alt: '',
        loop: true, // 指定音视频是否循环播放
        autoPlay: true, // 指定音视频是否自动播放
        controls: true, // 指定音视频是否显示控制栏
        poster: 'https://cdn.algbb.fun/emoji/32.png', // 指定视频播放器的封面
      },
    });
  };

  render() {
    const { editorState, visible } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '预览',
        onClick: this.preview,
      },
      /* {
        key: 'antd-uploader',
        type: 'component',
        component: (
          <Upload
            accept="image/!*"
            showUploadList={false}
            customRequest={this.uploadHandler}
          >
            {/!* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 *!/}
            <button type="button" className="control-item button upload-button" data-title="插入图片">
              <Icon type="picture" theme="filled" />
            </button>
          </Upload>
        ),
      }, */
    ];

    return (
      <div className="editor-container">
        <Modal
          title="test"
          visible={visible}
          onCancel={this.onClose}
          width="80%"
          style={{ top: 50 }}
        >
          <div className="editor-preview" dangerouslySetInnerHTML={{ __html: editorState.toHTML() }} />
        </Modal>
        <div>
          <Form onSubmit={this.handleSubmit} hideRequiredMark layout="inline" className="editor-header">
            <Form.Item label="文章标题">
              {getFieldDecorator('title', {
                rules: [{
                  required: true,
                  message: '请输入标题',
                }],
              })(
                <Input className="editor-title" placeholder="请输入标题" />,
              )}
            </Form.Item>
            <div>
              <Form.Item label="分类">
                {getFieldDecorator('type', {
                  initialValue: '手冲教程',
                  rules: [{
                    required: true,
                    message: '请选择分类',
                  }],
                })(
                  <Select style={{ width: 120 }}>
                    <Option value="手冲教程">
                      手冲教程
                    </Option>
                    <Option value="如何手冲">
                      如何手冲
                    </Option>
                  </Select>,
                )}
              </Form.Item>
              <Form.Item label="状态">
                {getFieldDecorator('status', {
                  initialValue: '发布',
                  rules: [{
                    required: true,
                    message: '请输入状态',
                  }],
                })(
                  <Select style={{ width: 80 }}>
                    <Option value="发布">
                      发布
                    </Option>
                    <Option value="草稿">
                      草稿
                    </Option>
                  </Select>,
                )}
              </Form.Item>
            </div>
            <Form.Item>
              <Button className="editor-button" type="primary" htmlType="submit">提交</Button>
            </Form.Item>
          </Form>
          <div className="editor-wrap">
            <div className="editor-content">
              <BraftEditor
                value={editorState}
                onChange={this.handleEditorChange}
                extendControls={extendControls}
                placeholder="请编辑您的内容"
                media={{
                  uploadFn: this.uploadHandler,
                  accepts: {
                    video: false,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
