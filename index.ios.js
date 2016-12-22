/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';
import PopularListView from './App/PopularListView';


export default class redditNative extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: PopularListView,
          title: 'Reddit',
        }}
        style={{flex: 1}}
      />
    );
  }
}


AppRegistry.registerComponent('redditNative', () => redditNative);
