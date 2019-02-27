import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const CustomBreadcrumb = (props) => {
  const { arr } = props;
  return (
    <Breadcrumb style={{ marginBottom: 16 }}>
      <Breadcrumb.Item><Link to="/index/home">首页</Link></Breadcrumb.Item>
      {arr && arr.map((item) => {
        if ((typeof item) === 'object') {
          return (
            <Breadcrumb.Item key={item.title}>
              <Link to={item.to}>{item.title}</Link>
            </Breadcrumb.Item>
          );
        }
        return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};
export default CustomBreadcrumb;
