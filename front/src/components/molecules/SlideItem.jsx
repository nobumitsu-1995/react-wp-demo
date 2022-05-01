import React, { Component } from 'react';
import styled from 'styled-components';
import { getPostImg } from '../../utils/functions/functions';
import StyledDate from '../atoms/Date';
import Text from '../atoms/Text';
import { Link } from "react-router-dom";

const ImgWrap = styled.figure`
  aspect-ratio: 11 / 6;
  background: #fff;
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

export default class SlideItem extends Component {
  render() {
    const parent = this.props.content.tags.includes(17);
    const id = parent ? this.props.content.categories.find(cat => {
      return cat !== this.props.catId
    }) : this.props.content.id;

    return (
      <Link to={parent ? `/content/${id}` : `/post/${id}`}>
        <ImgWrap className='slick-img-wrap'>
          <Img className='slick-img' src={getPostImg(this.props.content, "thumbnail")} alt={this.props.content.title.rendered} />
        </ImgWrap>
        <Text tag="h2" fontWeight="bold" fontSize="15px">{this.props.content.title.rendered}</Text>
        <StyledDate date={this.props.content.date} />
      </Link>
    )
  }
}
