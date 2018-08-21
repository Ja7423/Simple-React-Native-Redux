/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {Router, Scene, Stack} from 'react-native-router-flux';

import configureStore from './store/configureStore';
import ArticleList from './Component/Article/ArticleList';
import ReadView from './Component/WebView/ReadView';

const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key='root'>
            <Scene key='ArticleList' component={ArticleList} title='ArticleList'/>
            <Scene key='ReadView' component={ReadView} title='The New York Times'/>
          </Stack>
        </Router>
      </Provider>
    );
  }
}
