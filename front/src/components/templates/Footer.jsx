import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #ccc;
  padding: 30px 0;
  text-align: center;
  margin-top: 30px;
  position: absolute;
  bottom: 0;
  width: 100vw;
`;

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <small>Copyright(C) ○○ All rights reserved.</small>
      </StyledFooter>
    )
  }
}
