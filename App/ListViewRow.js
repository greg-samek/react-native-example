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

  const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
    },
  });

  render() {
    return (
      <TouchableHighlight onPress={() => this._handleNextPress(this.props.title)}>
        <View style={styles.row}>
          <Image
            style={{width: 70, height: 70}}
            source={{uri: this.props.imageUrl}}
          />
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 0, flexDirection: 'row'}}>
              <Text style={{color: 'royalblue', fontWeight: '600', fontFamily: 'Verdana'}}>
                {this.props.title}
              </Text>
              <Text style={{color: '#8E8E8E', fontWeight: '300', fontFamily: 'Verdana'}}>
                &nbsp; ({this.props.host})
              </Text>
            </View>
            <Text style={{fontFamily: 'Verdana', fontWeight: '200', fontSize: 13, top: 2}}>
              Submitted {this.props.submittedTime} hours ago by {this.props.author} to {this.props.subreddit}
            </Text>
            <Text style={{fontFamily: 'Verdana', fontWeight: '200'}}>
              {this.props.commentCount} comments
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}
