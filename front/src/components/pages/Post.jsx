import React, { Component } from 'react'
import client from '../../utils/functions/axios';
import Article from '../templates/Article';
import Loading from '../templates/Loading';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "initial state",
      isLoading: true,
      id: 0
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    client.get(`/posts/${id}?_embed`)
    .then(res => {
      this.setState({
        content: res.data,
        isLoading: false,
        id: id
      })
    })
    .catch(e => {
      console.log("post情報が取得できませんでした。");
    })
  }

  componentDidUpdate(prevState) {
    const id = this.props.match.params.id
    if (id !== prevState.match.params.id) {
      this.setState({isLoading: true})
      client.get(`/posts/${id}?_embed`)
      .then(res => {
        this.setState({
          content: res.data,
          isLoading: false,
          id: id
        })
      })
      .catch(e => {
        console.log("post情報が取得できませんでした。");
      })
    }
  }

  render() {
    return (
      <section>
      {this.state.isLoading ?
        <Loading/> :
        <Article content={this.state.content} />
      }
      </section>
    )
  }
}
