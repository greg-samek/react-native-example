import React, { Component } from 'react';
import { Image, NavigatorIOS, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import DetailScreen from './DetailScreen';

export default class ListViewRow extends Component {

  _handleNextPress(title) {
    this.props.navigator.push({
      component: DetailScreen,
      title: title,
    });
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this._handleNextPress(this.props.title)} >
        <View style={{flex: 1, flexDirection: 'row',
          alignSelf: 'stretch',
          marginTop: 10,
          marginBottom: 10,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginRight: 10,
          marginLeft: 10
        }}>
          <Text style={{fontWeight: '400', fontFamily: 'helvetica' , fontSize: 17, flex: 0.7}}>
            {this.props.title}
          </Text>
          <Image
            style={{
              width: 140,
              height: 92
            }}
            source={{uri: this.props.imageUrl}}
          />
        </View>
      </TouchableHighlight>
    );
  }

}
