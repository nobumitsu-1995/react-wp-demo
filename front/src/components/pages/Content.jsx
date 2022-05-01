import React, { Component } from 'react'
import client from '../../utils/functions/axios';
import { getChildPost, getParentPost } from '../../utils/functions/functions';
import ContentTop from '../templates/ContentTop';
import Loading from '../templates/Loading';

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    const catId = this.props.match.params.id;
    client.get(`/posts?categories=${catId}&_embed`)
    .then(res => {
      this.setState({
        parentContent: getParentPost(res.data),
        childContents: getChildPost(res.data),
        isLoading: false
      })
    })
    .catch(e => {
      console.log("post情報が取得できませんでした。");
    })
  }

  render() {
    return (
      <>
      {
        this.state.isLoading ?
        <Loading/> :
        <ContentTop content={this.state.parentContent[0]} childContents={this.state.childContents} />
      }
      </>
    )
  }
}
