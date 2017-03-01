import { ActivityIndicator, Fetch,Image, NavigatorIOS, Text, ListView, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import ListViewRow from './ListViewRow';
import { BASE_URL } from './api';

export default class PopularListView extends Component {
  constructor(props) {
     super(props);
     this.state = {
       dataSource: {},
       loading: true
     };
   }

   componentDidMount() {
     const { dataSource, loading } = this.state;
     const initialLoad_URL = BASE_URL + 'onload.json';
     fetch(initialLoad_URL)
     .then((response) => response.json())
     .then( (json) => {
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({dataSource: ds.cloneWithRows(json), loading: false});
     })
     .catch((error) => {
       console.warn(error);
     });

   }

  render() {
    const {loading} = this.state;
      return (
        <View style={{flex: 1}}>
          {loading &&
            <ActivityIndicator
            style={{alignItems: 'center',
              justifyContent: 'center',
              marginTop: 300
            }}
            size="large"
            />
          }
          {!loading &&
            <ListView style={{marginTop: 60}}
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <ListViewRow navigator={this.props.navigator} {... rowData} /> }
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={{ flex: 1, height: 3, backgroundColor: '#F0F0F0'}} />}
            />
          }

        </View>
      );
    }
}