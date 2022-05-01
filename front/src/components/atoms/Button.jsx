import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #2d2d2d;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  padding: 14px 0;
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
`;

export default class Button extends Component {
  render() {
    return (
      <StyledButton>
        {this.props.children}
      </StyledButton>
    )
  }
}
