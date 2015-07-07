import React        from 'react';
import Page         from './components/Page.js';
import KataApp      from './components/KataApp.js';
import KataGroups   from './katagroups.js';
import RawKataData  from './rawkata.js';
import Loader       from './_external-deps/Loader.js';


const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';

const noop = function(err){};

const onSuccess = ({groups:rawGroups}) => {

  if (typeof document != 'undefined') {

    React.render(<Page groups={KataGroups.fromRawKataData(rawGroups)}/>, document.getElementById('app'));

  } else {

    var page = React.renderToString(<Page groups={KataGroups.fromRawKataData(rawGroups)} />)
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

};

new RawKataData(Loader.loadRemoteFile, url).load(noop, onSuccess);