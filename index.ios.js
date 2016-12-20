/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import PopularListView from './App/PopularListView';


export default class redditNative extends Component {
  render() {
    return (
      <PopularListView></PopularListView>
    );
  }
}


AppRegistry.registerComponent('redditNative', () => redditNative);
