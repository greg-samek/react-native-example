import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class DetailScreen extends Component {

  render() {
    return (
      <View style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 80,
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
    );
  }

}