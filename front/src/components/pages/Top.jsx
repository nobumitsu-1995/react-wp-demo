import React, { Component } from 'react'
import client from '../../utils/functions/axios';
import { getChildPost, getFreePost, getParentPost } from '../../utils/functions/functions';
import CategoryTop from '../templates/CategoryTop';
import Loading from '../templates/Loading';

export default class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    client.get(`/posts?per_page=30&_embed`)
      .then(res => {
        this.setState({
          parentPosts: getParentPost(res.data),
          childPosts: getChildPost(res.data),
          freePosts: getFreePost(res.data),
          isLoading: false,
        })
      })
      .catch(e => {
        console.log("postデータを取得できませんでした。");
      })
  }

  render() {
    return (
      <>
        {this.state.isLoading ? 
          <Loading/> :
          <CategoryTop catId={this.state.catId} category="ドラマ" recommendedPosts={this.state.parentPosts} newestPosts={this.state.childPosts} freePosts={this.state.freePosts} />
        }
      </>
    )
  }
}
