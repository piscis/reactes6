import assert from 'assert';
import { loadRemoteFile }  from '../src/JSONLoader.js';
//import {loadRemoteFile }  from '../src/JSONLoader.js';

describe('Environment test', function(){

  it('It should not fail', function(){
    assert.equal(1,1);
  });

});


describe('loading JSON from server', function(){

  it('file exists and structure has `groups`', function(done){

    // arrange
    var validUrl = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';


    // act
    loadRemoteFile(validUrl, function(err, result){

      // assert
      assert.equal(err, null);
      //assert.equal(result.substr(0,13),"{\n  \"groups\":");
      assert.equal('groups' in result, true);
      done();

    });

  });

  it('file exists and structure has NO `groups`', function(done){

    // arrange
    var validUrl = 'http://katas.tddbin.com/katas/es6/language/__all__.json';


    // act
    loadRemoteFile(validUrl, function(err, result){

      // assert
      assert.equal(err, null);
      //assert.equal(result.substr(0,13),"{\n  \"groups\":");
      assert.deepEqual(result, {});
      done();

    });

  });

});