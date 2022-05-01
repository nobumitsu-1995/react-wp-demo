import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import PageLinks from '../molecules/PageLinks'
import SaveShareButtons from '../molecules/SaveShareButtons'

const LinkList = styled.div`
  border-left: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  padding-left: 15px;
`;

export default class ArticleLinks extends Component {
  render() {
    return (
      <LinkList>
        <div>
          <Button>
            視聴
          </Button>
          <SaveShareButtons/>
        </div>
        <PageLinks prev={this.props.prev} top={this.props.top} next={this.props.next}/>
      </LinkList>
    )
  }
}
