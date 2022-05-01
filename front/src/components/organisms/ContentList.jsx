import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button';
import ContentListItem from '../molecules/ContentListItem';

const Section = styled.section`
  background-color: #f3f4f5;
  display: grid;
  gap: 20px;
  grid-template-columns: 3fr 1fr;
  padding: 20px 50px;
`;

const List = styled.ul`
  background-color: #fff;
  padding: 20px;
`;

const Ad = styled.figure`
  background-color: pink;
  color: #fff;
  font-weight: bold;
  padding: 80px 0;
  text-align: center;
`;

export default class ContentList extends Component {
  render() {
    return (
      <Section>
        <List>
          {this.props.contents.map(content => {
            return (
              <ContentListItem key={content.id} content={content}/>
            )
          })}
        </List>
        <div>
          <Button>インフォメーション</Button>
          <Button>グッズオンライン</Button>
          <Ad>広告が入ります。</Ad>
        </div>
      </Section>
    )
  }
}
