import React, { Component } from 'react'
import Slider from "react-slick";
import styled from "styled-components";
import { getPostImg } from '../../utils/functions/functions';
import { Link } from "react-router-dom";

const SlideWrapper = styled.div`
  .slick-img {
    background: #fff;
    padding: 0 5px;
    width: 100%;
    height: auto;
  }

  .slick-slide {
    width: calc((100vw - 60px) / 2);
    height: auto;
    overflow: hidden;

    &:hover {
      .slick-img {
        transform: scale(1.1);
        transition-duration: 0.4s;
        opacity: 0.8;
      }
    }
  }

  .slick-prev {
    width: 50px;
    height: 50px;
    border-top: 5px solid #fff;
    border-right: 5px solid #fff;
    transform: rotate(-135deg);
    z-index: 1;
    position: absolute;
    left: 50px;

    ::before {
      display: none;
    }
  }
  .slick-next {
    width: 50px;
    height: 50px;
    border-top: 5px solid #fff;
    border-right: 5px solid #fff;
    transform: rotate(45deg);
    z-index: 1;
    position: absolute;
    right: 50px;

    ::before {
      display: none;
    }
  }
`;

export default class SlickSliderMain extends Component {
  render() {
    const settings = {
      autoplay: true,
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };

    return (
      <SlideWrapper>
        <Slider {...settings}>
          {this.props.contents.map( content => {
            const id = content.categories.find(cat => {
              return cat !== this.props.catId
            })
            return (
              <Link to={`/content/${id}`} key={content.id} >
                <img className='slick-img' src={getPostImg(content, "large")} alt={content.title.rendered} />
              </Link>
            );
          })}
        </Slider>
      </SlideWrapper>
    );
  }
}
