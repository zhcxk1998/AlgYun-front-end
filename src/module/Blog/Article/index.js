import React from 'react';
import CustomBreadcrumb from '../../../component/CustomBreadcrumb/index';
import './style.css';

class Article extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative', background: '#fff' }}>
        <CustomBreadcrumb arr={['博客', '文章列表']} />
        <div className="article-container" />
        <div className="atricle-tags" />
      </div>
    );
  }
}
export default Article;
