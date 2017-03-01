import { Image, NavigatorIOS, Text, ListView, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import ListViewRow from './ListViewRow';
import api from './data';

export default class PopularListView extends Component {
  constructor(props) {
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       // TODO: Replace with stubbed-out data or api request.
       dataSource: ds.cloneWithRows(api())
     };
   }

  render() {
      return (
        <View style={{flex: 1}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <ListViewRow navigator={this.props.navigator} {... rowData} /> }
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{ flex: 1, height: 5, backgroundColor: '#F0F0F0'}} />}
          />
        </View>
      );
    }
}