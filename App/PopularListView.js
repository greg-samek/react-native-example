import { Image, NavigatorIOS, Text, ListView, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import ListViewRow from './ListViewRow';


const initialData = [
    {
     title: 'Rocket seen from plane.',
     author:'Nobilitie',
     host:'i.imgur.com',
     subreddit: 'r/space',
     imageUrl:'https://b.thumbs.redditmedia.com/QCZUVdRZ-INrtkcT1xK0o50p2drFfhoy6hKvnAkJUfI.jpg',
     commentCount: 835,
     submittedTime: 6,
   },
   {
   title: 'Lorum Ipsum',
   author:'Nobilitie',
   host:'i.imgur.com',
   subreddit: 'r/space',
   imageUrl:'https://b.thumbs.redditmedia.com/0TYXGV417ag7fxdUBYtGC_jrVsLoJjNt-yUn0JwQQoI.jpg',
   commentCount: 835,
   submittedTime: 6,
   },
   {
    title: 'Other random title.',
    author:'Nobilitie',
    host:'i.imgur.com',
    subreddit: 'r/space',
    imageUrl:'https://b.thumbs.redditmedia.com/Et6Rpb-A9s6rNSgVTN2i5H3ueNgCT2nCB_Ncr1AqGos.jpg',
    commentCount: 835,
    submittedTime: 6,
  },
  {
   title: 'Rocket seen from plane.',
   author:'Nobilitie',
   host:'i.imgur.com',
   subreddit: 'r/space',
   imageUrl:'https://b.thumbs.redditmedia.com/9s_2stITXfB06VpmAvmyv_Be7sWAFjvSicfTodXtyRI.jpg',
   commentCount: 835,
   submittedTime: 6,
   },
   {
    title: 'Rocket seen from plane.',
    author:'Nobilitie',
    host:'i.imgur.com',
    subreddit: 'r/space',
    imageUrl:'https://b.thumbs.redditmedia.com/X0ck0qjuJxfVBIF9aT3UjC6DOhpCiiNweEbYrvYVPTw.jpg',
    commentCount: 835,
    submittedTime: 6,
  },
  {
   title: 'Rocket seen from plane.',
   author:'Nobilitie',
   host:'i.imgur.com',
   subreddit: 'r/space',
   imageUrl:'https://b.thumbs.redditmedia.com/lydLgy85SuG11C4AH4ducB2BnUj74Pl16Z0xDHVwb1A.jpg',
   commentCount: 835,
   submittedTime: 6,
  },
  {
  title: 'Rocket seen from plane.',
  author:'Nobilitie',
  host:'i.imgur.com',
  subreddit: 'r/space',
  imageUrl:'https://b.thumbs.redditmedia.com/lydLgy85SuG11C4AH4ducB2BnUj74Pl16Z0xDHVwb1A.jpg',
  commentCount: 835,
  submittedTime: 6,
  },
  {
  title: 'Rocket seen from plane.',
  author:'Nobilitie',
  host:'i.imgur.com',
  subreddit: 'r/space',
  imageUrl:'https://b.thumbs.redditmedia.com/lydLgy85SuG11C4AH4ducB2BnUj74Pl16Z0xDHVwb1A.jpg',
  commentCount: 835,
  submittedTime: 6,
  },
  {
  title: 'Rocket seen from plane.',
  author:'Nobilitie',
  host:'i.imgur.com',
  subreddit: 'r/space',
  imageUrl:'https://b.thumbs.redditmedia.com/lydLgy85SuG11C4AH4ducB2BnUj74Pl16Z0xDHVwb1A.jpg',
  commentCount: 835,
  submittedTime: 6,
  },
  {
  title: 'Rocket seen from plane.',
  author:'Nobilitie',
  host:'i.imgur.com',
  subreddit: 'r/space',
  imageUrl:'https://b.thumbs.redditmedia.com/lydLgy85SuG11C4AH4ducB2BnUj74Pl16Z0xDHVwb1A.jpg',
  commentCount: 835,
  submittedTime: 6,
  }
];

export default class PopularListView extends Component {
  constructor(props) {
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       // TODO: Replace with stubbed-out data or api request.
       dataSource: ds.cloneWithRows(initialData)
     };
   }

  render() {
      return (
        <View style={{flex: 1, paddingTop: 22}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <ListViewRow navigator={this.props.navigator} {... rowData} /> }
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{ flex: 1, height: 2, backgroundColor: '#8E8E8E'}} />}
          />
        </View>
      );
    }
}