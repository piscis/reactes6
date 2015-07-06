import React from 'react';

import KataNavigation from './KataNavigation.js';
import KataSubnavigation from './KataSubnavigation.js';
import KataDetails from './KataDetails.js';


export default class KataGroups extends React.Component {

  render() {

    return (

      <div id="layout" className="content pure-g">

        <KataNavigation kataGroups={this.props.kataGroups}></KataNavigation>

        <KataSubnavigation></KataSubnavigation>

        <KataDetails></KataDetails>

      </div>
    )
  }
}