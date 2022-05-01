import React, { Component } from 'react'
import Text from '../atoms/Text';
import SlickSliderSub from './SlickSliderSub';

export default class ArticleList extends Component {
  render() {
    return (
      <section>
        <Text fontSize="20px" fontWeight="bold" margin="0 0 15px" >{this.props.title}</Text>
        <SlickSliderSub contents={this.props.contents}/>
      </section>
    )
  }
}
