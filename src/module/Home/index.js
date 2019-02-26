import React from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('store')@observer
class Home extends React.Component {
  handleInc=() => {
    this.props.store.increment();
  }

  handleDec=() => {
    this.props.store.decrement();
  }

  render() {
    return (
      <div>
        Counter:
        {this.props.store.count}
        <br />
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
        <DevTools />
      </div>
    );
  }
}

export default Home;
