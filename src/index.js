import React from 'react';

class Page extends React.Component {

  render() {

    return (
      <ul>
        <li>Item 1</li>
      </ul>
    )
  }
}

React.render(<Page />, document.getElementById('app'));