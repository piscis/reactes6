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

import JSONLoader from './JSONLoader.js';

const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';
JSONLoader.loadRemoteFile(url, (err, {groups})=>{

  React.render(<Page groups={groups} />, document.getElementById('app'));
});