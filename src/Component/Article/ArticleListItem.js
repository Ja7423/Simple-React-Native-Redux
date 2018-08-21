/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

class ArticleListItem extends React.PureComponent {
  _onPressItem = () => {
    this.props.onPressItem(this.props.index, this.props.item);
  }

  render(){
    const item = this.props.item;
    const title = item.headline ? item.headline.main : '';
    const snippet = item.snippet ? item.snippet : '';

    return(
      <TouchableHighlight onPress={this._onPressItem} underlayColor='#dddddd'>
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.snippet}>{snippet}</Text>
          </View>
          <View style={styles.seperateLine}/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ArticleListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  snippet: {
    fontSize: 14,
    paddingLeft: 10,
    marginTop: 10,
  },
  seperateLine: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});
