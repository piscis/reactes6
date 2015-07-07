import React        from 'react';
import KataApp      from './KataApp.js';

export default class Page extends React.Component {

  render() {

    const {groups} = this.props;

    return (
      <KataApp kataGroups={groups}></KataApp>
    )
  }
}