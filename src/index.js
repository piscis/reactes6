import React from 'react';

class Page extends React.Component {

  render() {

    return (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    )
  }
}

React.render(<Page />, document.getElementById('app'));