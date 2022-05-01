import React, { Component } from 'react'
import styled from 'styled-components'
import { getPostImg } from '../../utils/functions/functions'
import Text from '../atoms/Text'
import SaveShareButtons from '../molecules/SaveShareButtons';
import ContentList from '../organisms/ContentList';

const Article = styled.article`
  display: grid;
  gap: 20px;
  grid-template-columns: 0.8fr 1fr;
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;
`;

const Figure = styled.figure`
  margin-bottom: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default class ContentTop extends Component {
  render() {
    return (
      <>
        <Article>
          <div>
            <Figure>
              <Img src={getPostImg(this.props.content, "full")} alt={this.props.content.title.rendered} />
            </Figure>
            <SaveShareButtons/>
          </div>
          <div>
            <Text fontSize="38px" fontWeight="bold" margin="0 0 30px" tag="h2">{this.props.content.title.rendered}</Text>
            <div dangerouslySetInnerHTML={{__html: this.props.content.content.rendered}}/>
          </div>
        </Article>
        <ContentList contents={this.props.childContents}/>
      </>
    )
  }
}
