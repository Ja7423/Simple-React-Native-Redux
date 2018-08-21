/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {fetchArticleAPI} from '../../action';
import {connect} from 'react-redux';
import {API_KEY} from '../../API/API';
import {bindActionCreators} from 'redux';

import ArticleListItem from './ArticleListItem';
import ReadView from '../WebView/ReadView';


class ArticleList extends Component<{}> {
  _keyExtractor = (item, index) => item._id;

  _onPressItem = (index, item) => {
    console.log('press item index(' + index + ')');

    Actions.ReadView({webURL: item.web_url});
  }

  _renderItem = ({item, index}) => (
    <ArticleListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );

  render() {
    const { articleData, errorMSG } = this.props.fetchResult;
    return (
      <FlatList data={articleData}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}/>
    );
  }

  componentDidMount() {
    // fetch api
    const params = {
      'api-key': API_KEY,
      'sort': 'newest',
    }

    this.props.getArticleList(params);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps (state, ownProps) {
  return {
    fetchResult: state.articleReducer
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return bindActionCreators({
    getArticleList: fetchArticleAPI
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList)
