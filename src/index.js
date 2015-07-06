import React from 'react';

class Page extends React.Component {

  render() {

    const {groups} = this.props;
    const groupNames = Object.keys(groups);

    return (
      <ul>
        {groupNames.map(name => <li>{name}</li>)}
      </ul>
    )
  }
}

import JSONLoader from './JSONLoader.js';

const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';
JSONLoader.loadRemoteFile(url, (err, {groups})=>{

  React.render(<Page groups={groups} />, document.getElementById('app'));
});