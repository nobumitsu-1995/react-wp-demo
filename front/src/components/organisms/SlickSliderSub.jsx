import React, { Component } from 'react'
import Slider from "react-slick";
import styled from "styled-components";
import SlideItem from '../molecules/SlideItem';

const SlideWrapper = styled.div`
max-width: 1280px;
margin: 0 auto;

&:hover {
  .slick-arrow {
    opacity: 1;
    transition-duration: .3s;
    cursor: pointer;
  }
}

.slick-slide {
  padding: 0 5px;

  &:hover {
    .slick-img {
      transform: scale(1.1);
      transition-duration: 0.4s;
      opacity: 0.8;
    }
  }
}

.slick-arrow {
  opacity: 0;
  width: 40px;
  height: calc(100% - 37px);
  background: rgba(0,0,0,.5);
  z-index: 1;
  transition-duration: .3s;

  ::before {
    content: "";
    width: 20px;
    height: 20px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}

.slick-prev {
  top: 61px;
  left: 0;

  ::before {
    left: 15px;
    transform: rotate(-135deg);
  }
}

.slick-next {
  top: 61px;
  right: 0;

  ::before {
    transform: rotate(45deg);
    right: 15px;
  }
}

.slick-disabled {
  display: none !important;
}
`;

export default class SlickSliderSub extends Component {
  render() {
    const settings = {
      dots: false,
      canterMode: true,
      centerPadding: "15px",
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };

    return (
      <SlideWrapper>
        <Slider {...settings}>
          {this.props.contents.map( content => {
            return (
              <SlideItem catId={this.props.catId} content={content} key={content.id}/>
            );
          })}
        </Slider>
      </SlideWrapper>
    );
  }
}
