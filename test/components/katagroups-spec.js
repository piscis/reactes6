import assert from 'assert';
import React from 'react/addons';

import KataApp from '../../src/components/KataApp.js';
import KataGroups from '../../src/katagroups.js';
import {default as KataGroupsComponent} from '../../src/components/KataGroups.js';
import {default as KatasComponent} from '../../src/components/Katas.js';
import {hasChildOfType} from '../utils/customasserts.js';

assert.hasChildOfType = hasChildOfType;

describe('kata groups component', function() {

  it('receives a KataGroup instance', function() {
    let rawData = {'group name': {items: []}};
    let kataGroups = KataGroups.fromRawKataData(rawData);
    assert.hasChildOfType(<KataApp kataGroups={kataGroups} />, KataGroupsComponent);
  });

  it('receives a Katas instance', function() {
    let rawData = {'group name': {items: []}};
    let kataGroups = KataGroups.fromRawKataData(rawData);
    assert.hasChildOfType(<KataApp kataGroups={kataGroups} />, KatasComponent);
  });
});