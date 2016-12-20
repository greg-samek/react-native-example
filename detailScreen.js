import React, { Component } from 'react';
import { Text } from 'react-native';


export default class DetailScreen extends Component {
  render(): {
    return (
      <Text> props: {this.props} </Text>
    );
  }
}