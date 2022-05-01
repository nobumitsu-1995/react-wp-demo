import React, { Component } from 'react'
import styled from 'styled-components'
import { getChildPost, getChildPostCat, getNextPostId, getPostImg, getPrevPostId } from '../../utils/functions/functions'
import Accordion from '../organisms/Accordion';
import client from '../../utils/functions/axios';
import ArticleLinks from '../organisms/ArticleLinks';
import ContentList from '../organisms/ContentList';
import Loading from './Loading';

const Img = styled.img`
  width: 100%;
  height:auto;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  margin: 30px 0;
`;

const StyledArticle = styled.article`
  padding: 20px;
  max-width: 1080px;
  margin: 0 auto;

  h2 {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  ul {
    margin-bottom: 29px;
  }

  h3 {
    font-weight: bold;
    margin: 30px 0 15px;
  }
`;

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content,
      top: 0,
      prev: 0,
      next: 0,
    }
  }

  componentDidMount() {
    client.get(`/categories?post=${this.props.content.id}`)
    .then(res => {
      const catId = getChildPostCat(res.data).id;

      client.get(`/posts?categories=${catId}&orderby=date&order=asc&_embed`)
      .then(res => {
        const prev = getPrevPostId(res.data, this.state.content.id);
        const next = getNextPostId(res.data, this.state.content.id);

        console.log(getChildPost(res.data));

        this.setState({
          contents: getChildPost(res.data),
          top: catId,
          prev: prev,
          next: next
        });
      })
      .catch(e => {
        console.log(e);
      })
    })
    .catch(e => {
      console.log("postが見つかりませんでした");
    })
  }

  render() {
    return (
      <>
      <StyledArticle>
        <figure>
          <Img src={getPostImg(this.state.content, "full")} alt={this.state.content.title.rendered} />
        </figure>
        <Body>
          <Accordion>
            <div dangerouslySetInnerHTML={{__html: this.state.content.content.rendered}}/>
          </Accordion>
          <ArticleLinks prev={this.state.prev} top={this.state.top} next={this.state.next}/>
        </Body>
      </StyledArticle>
      {
        this.state.contents ?
        <ContentList contents={this.state.contents}/> :
        <Loading/>
      }
      </>
    )
  }
}
