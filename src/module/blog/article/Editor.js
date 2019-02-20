import React from 'react';
import {
  Modal, Form, Button, Input, Select,
} from 'antd';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';
import 'braft-extensions/dist/color-picker.css';
import 'braft-extensions/dist/table.css';
import './Editor.css';

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

const {Option} = Select;

BraftEditor.use(CodeHighlighter(options));
BraftEditor.use(ColorPicker());
BraftEditor.use(HeaderId());
BraftEditor.use(Table({
  defaultColumns: 5,
  defaultRows: 3,
}));
BraftEditor.use(Markdown());

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState(null),
      visible: false,
    };
  }

  componentDidMount() {
    console.log(this.props.match.path);
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
  }

  render() {
    const {editorState, visible} = this.state;
    const {getFieldDecorator} = this.props.form;
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '预览',
        onClick: this.preview,
      },
    ];

    return (
      <div>
        <Modal
          title="test"
          visible={visible}
          onCancel={this.onClose}
          width="80%"
          style={{top: 50}}
        >
          <div className="editor-preview" dangerouslySetInnerHTML={{__html: editorState.toHTML()}}/>
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
                <Input className="editor-title" placeholder="请输入标题"/>,
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
                  <Select style={{width: 120}}>
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
                  <Select style={{width: 80}}>
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
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Editor = Form.create()(Editor);

export default Editor;
