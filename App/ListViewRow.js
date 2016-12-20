import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';


export default class ListViewRow extends Component {


  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
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
    );
  }

}
