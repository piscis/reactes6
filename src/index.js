import React from 'react';
import KataGroups from './components/KataGroups.js'

class Page extends React.Component {

  render() {

    const {groups} = this.props;

    return (
      <KataGroups kataGroups={groups}></KataGroups>
    )
  }
}

import JSONLoader from './JSONLoader.js';

const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';
JSONLoader.loadRemoteFile(url, (err, {groups})=>{

  React.render(<Page groups={groups} />, document.getElementById('app'));
});