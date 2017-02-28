import React, { Component } from 'react';
import { Image, NavigatorIOS, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
// import DetailScreen from './DetailScreen';

export default class ListViewRow extends Component {

  _handleNextPress(title) {
    // this.props.navigator.push({
    //   component: DetailScreen,
    //   title: title,
    // });
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this._handleNextPress(this.props.title)} >
        <View style={{flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Image
            style={{
              width: 241,
              height: 161,
              marginTop: 10,
              alignSelf: 'center'
            }}
            source={{uri: this.props.imageUrl}}
          />
          <Text style={{fontWeight: '600', textAlign: 'center', fontFamily: 'helvetica' , fontSize: 17, flex: 0.7, marginTop: 10, marginBottom: 10 }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

}
