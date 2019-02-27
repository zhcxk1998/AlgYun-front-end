import React from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('DataStore')@observer
class Home extends React.Component {
  handleInc=() => {
    this.props.DataStore.increment();
  }

  handleDec=() => {
    this.props.DataStore.decrement();
  }

  render() {
    return (
      <div>
        Counter:
        {this.props.DataStore.count}
        <br />
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
        <DevTools />
      </div>
    );
  }
}

export default Home;
