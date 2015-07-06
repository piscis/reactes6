import React from 'react';

export default class KataNavigation extends React.Component {

  render() {

    const {kataGroups} = this.props;
    const kataGroupNames = Object.keys(kataGroups);


    return (
      <div id="nav" className="pure-u">
        <a href="#" className="nav-menu-button">Menu</a>

        <div className="nav-inner">
          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className="pure-menu-heading">Kata groups</li>
              <li className="pure-menu-item">
              </li>
              {kataGroupNames.map(name => <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">{name}  <span className="email-count">({kataGroups[name].items.length})</span></a>
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}