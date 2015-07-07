import React from 'react';
import KataGroups from './KataGroups.js';
import Katas from './Katas.js';
import Kata from './Kata.js';


export default class KataApp extends React.Component {

  render() {

    return (

      <div id="layout" className="content pure-g">

        <KataGroups kataGroups={this.props.kataGroups}></KataGroups>

        <Katas></Katas>

        <Kata></Kata>

      </div>
    )
  }
}