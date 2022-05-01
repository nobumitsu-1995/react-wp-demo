import React, { Component } from 'react'
import styled from 'styled-components'

export default class Text extends Component {
  render() {
    const P = styled.p``;
    const StyledText = styled(P.withComponent(this.props.tag))`
      color: ${this.props.color};
      font-family: ${this.props.fontFamily};
      font-size: ${this.props.fontSize};
      font-weight: ${this.props.fontWeight};
      line-height: ${this.props.lineHeight};
      margin: ${this.props.margin};
      padding: ${this.props.padding};
      text-align: ${this.props.textAlign};
    `;
  
    return (
      <StyledText>{this.props.children}</StyledText>
    )
  }
}

Text.defaultProps= {
  color: "#111",
	fontFamily: "Noto Sans JP",
	fontSize: "16px",
	tag: "p",
	textAlign: "left",
}
