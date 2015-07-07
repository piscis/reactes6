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

import JSONLoader from './_external-deps/Loader.js';

const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';

JSONLoader.loadRemoteFile(url, (err, {groups})=> {

  if(typeof document != 'undefined') {
    React.render(<Page groups={groups}/>, document.getElementById('app'));
  }else{

    var page = React.renderToString(<Page groups={groups}/>)
    var a = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>ES6 workshop</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
        <!--[if lte IE 8]>
        <link rel="stylesheet" href="./css/layouts/email-old-ie.css">
        <![endif]-->
        <!--[if gt IE 8]><!-->
        <link rel="stylesheet" href="./css/layouts/email.css">
        <!--<![endif]-->
      </head>
      <body>
        ${page}
      </body>
    </html>`;

    console.log(a);
  }

});