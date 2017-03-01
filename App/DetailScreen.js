import React, { Component } from 'react';
import { Fetch, ScrollView, Text, TouchableHighlight, StyleSheet, View, Image } from 'react-native';
import { shareOnTwitter } from 'react-native-social-share';
import { BASE_URL } from './api';

export default class DetailScreen extends Component {

  constructor(props) {
     super(props);
     this.state = {
       text: ""
     };
   }

  componentDidMount() {
    const { id } = this.props;
    const ARTICLE_URL = BASE_URL + 'article-' + id + '.json';
    fetch(ARTICLE_URL)
    .then((response) => response.json())
    .then( (json) => {
      this.setState({text: json})
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  render() {
    return (
      <View style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        justifyContent: 'flex-start',
      }}>
        <ScrollView>
          <Image
            style={{
              width: 370,
              height: 289,
              marginTop: 0,
              alignSelf: 'center'
            }}
            source={{uri: this.props.imageUrl}}
          />
          <Text style={{ paddingLeft: 12, fontWeight: '400',  fontFamily: 'helvetica' , fontSize: 15, marginTop: 10 }}>
                {this.state.text}
          </Text>
        </ScrollView>
      </View>
    );
  }

}