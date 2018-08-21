/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView,
} from 'react-native';

export default class ReadView extends Component<{}> {
  render() {
    const {webURL} = this.props;
    console.log('webURL: '+ webURL);

    return (
      <WebView style={styles.container}
               source={{uri: webURL}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
