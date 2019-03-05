import React from 'react';
import { Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="headerbar">
      <div>
          <Badge dot>
            <Link to="/">Link something</Link>
          </Badge>
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
        <div>
          <Avatar size={48} src="https://cdn.algbb.fun/avater/fat.jpg" style={{ boxShadow: 'rgba(0,0,0,0.3) 0 0 5px' }} />
        </div>
      </div>
    );
  }
}

export default HeaderBar;
