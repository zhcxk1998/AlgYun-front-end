import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import LoadableComponent from '../../utils/LoadabelComponent';

const Editor = LoadableComponent(() => import('./article/Editor'));

export default class Blog extends React.Component {
  // test = () => <div>emmm</div>

  // type = (props) => {
  //   console.log(props.match.params)
  //   return (<div>
  //     {props.match.params.type}
  //   </div>)
  // }

  componentDidMount() {
    console.log(this.props.match.path);
  }


  render() {
    return (
      <div>
        {/* <NavLink activeStyle={{ color: 'red' }} to="/blog/editor">editor</NavLink> */}
        {/* <NavLink activeStyle={{ color: 'red' }} to="/blog/test"> test</NavLink> */}
        {/* <NavLink activeStyle={{ color: 'red' }} to="/blog/1">1</NavLink> */}
        {/* <NavLink activeStyle={{ color: 'red' }} to="/blog/2">2</NavLink> */}
        <Route path="/blog/editor" component={Editor} />
        <Route path="/blog/test" component={Text} />
        {/* <Route path="/blog/:type" component={this.type}/> */}
      </div>
    );
  }
}
