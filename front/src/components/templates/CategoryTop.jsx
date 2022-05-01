import React, { Component } from 'react'
import ArticleList from '../organisms/ArticleList'
import SlickSliderMain from '../organisms/SlickSliderMain'

export default class CategoryTop extends Component {
  render() {
    return (
      <>
        <SlickSliderMain catId={this.props.catId} contents={this.props.recommendedPosts}/>
        <ArticleList title={`${this.props.category}新着`} contents={this.props.newestPosts}/>
        <ArticleList catId={this.props.catId} title={`${this.props.category}おすすめ`} contents={this.props.recommendedPosts} />
        <ArticleList title={`${this.props.category}無料`} contents={this.props.freePosts} />
      </>
    )
  }
}
