import React from 'react';
import ContextMenu from '../src/context';

export default class Basic extends React.Component {

  shown(e){
    console.log(e.target)
  }

  render() {
    return (
      <ContextMenu
      onShow={this.shown}
      style={{
        background: 'white',
        border: 'black',
        boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.75)',
        padding: 10,
        width: 100
      }}>
          <p>click in here! To close, click the link or outside</p>
          <ul style={{padding: 0, margin: 0}}>
            <li style={{listStyle: 'none'}}><a href="http://github.com/legitcode/context-menu">View on Github</a></li>
          </ul>
      </ContextMenu>
    );
  }
}

React.render(<Basic />, document.getElementById('react'));
