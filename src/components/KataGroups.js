import React from 'react';
import {default as KataGroupsData} from '../katagroups.js';

export default class KataGroups extends React.Component {

  static propTypes = {
    kataGroups: React.PropTypes.instanceOf(KataGroupsData).isRequired
  };

  render() {

    const {kataGroups} = this.props;

    return (
      <div id="nav" className="pure-u">
        <a href="#" className="nav-menu-button">Menu</a>

        <div className="nav-inner">
          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className="pure-menu-heading">Kata groups</li>
              <li className="pure-menu-item">
              </li>
              {kataGroups.groups.map(group => <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">{group.name}  <span className="email-count">({group.katasCount})</span></a>
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}