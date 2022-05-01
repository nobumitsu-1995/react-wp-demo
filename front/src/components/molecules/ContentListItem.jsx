import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPostImg } from '../../utils/functions/functions';
import StyledDate from '../atoms/Date';
import Text from '../atoms/Text';

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Flex = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 4fr;
`;

const Img = styled.img`
  aspect-ratio: 11 / 8;
  width: 100%;
  height: auto;
`;

export default class ContentListItem extends Component {
  render() {
    return (
      <Item>
        <Link to={`/post/${this.props.content.id}`}>
          <Flex>
            <figure>
              <Img src={getPostImg(this.props.content, "thumbnail")} alt={this.props.content.title.rendered} />
            </figure>
            <div>
              <Text tag="h3" fontWeight="bold" margin="0 0 5px">{this.props.content.title.rendered}</Text>
              <div dangerouslySetInnerHTML={{__html: this.props.content.excerpt.rendered}}/>
              <StyledDate date={this.props.content.date}/>
            </div>
          </Flex>
        </Link>
      </Item>
    );
  }
}
