import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const load5 = keyframes`
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #4f4b36, 1.8em -1.8em 0 0em rgba(79,75,54, 0.2), 2.5em 0em 0 0em rgba(79,75,54, 0.2), 1.75em 1.75em 0 0em rgba(79,75,54, 0.2), 0em 2.5em 0 0em rgba(79,75,54, 0.2), -1.8em 1.8em 0 0em rgba(79,75,54, 0.2), -2.6em 0em 0 0em rgba(79,75,54, 0.5), -1.8em -1.8em 0 0em rgba(79,75,54, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(79,75,54, 0.7), 1.8em -1.8em 0 0em #4f4b36, 2.5em 0em 0 0em rgba(79,75,54, 0.2), 1.75em 1.75em 0 0em rgba(79,75,54, 0.2), 0em 2.5em 0 0em rgba(79,75,54, 0.2), -1.8em 1.8em 0 0em rgba(79,75,54, 0.2), -2.6em 0em 0 0em rgba(79,75,54, 0.2), -1.8em -1.8em 0 0em rgba(79,75,54, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(79,75,54, 0.5), 1.8em -1.8em 0 0em rgba(79,75,54, 0.7), 2.5em 0em 0 0em #4f4b36, 1.75em 1.75em 0 0em rgba(79,75,54, 0.2), 0em 2.5em 0 0em rgba(79,75,54, 0.2), -1.8em 1.8em 0 0em rgba(79,75,54, 0.2), -2.6em 0em 0 0em rgba(79,75,54, 0.2), -1.8em -1.8em 0 0em rgba(79,75,54, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(79,75,54, 0.2), 1.8em -1.8em 0 0em rgba(79,75,54, 0.5), 2.5em 0em 0 0em rgba(79,75,54, 0.7), 1.75em 1.75em 0 0em #4f4b36, 0em 2.5em 0 0em rgba(79,75,54, 0.2), -1.8em 1.8em 0 0em rgba(79,75,54, 0.2), -2.6em 0em 0 0em rgba(79,75,54, 0.2), -1.8em -1.8em 0 0em rgba(79,75,54, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(79,75,54, 0.2), 1.8em -1.8em 0 0em rgba(79,75,54, 0.2), 2.5em 0em 0 0em rgba(79,75,54, 0.5), 1.75em 1.75em 0 0em rgba(79,75,54, 0.7), 0em 2.5em 0 0em #4f4b36, -1.8em 1.8em 0 0em rgba(79,75,54, 0.2), -2.6em 0em 0 0em rgba(79,75,54, 0.2), -1.8em -1.8em 0 0em rgba(79,75,54, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(79,75,54, 0.2), 1.8em -1.8em 0 0em rgba(79,75,54, 0.2), 2.5em 0em 0 0em rgba(79,75,54, 0.2), 1.75em 1.75em 0 0em rgba(79,75,54, 0.5), 0em 2.5em 0 0em rgba(79,75,54, 0.7), -1.8em 1.8em 0 0em #4f4b36, -2.6em 0em 0 0em rgba(79,75,54, 0.2), -1.8em -1.8em 0 0em rgba(79,75,54, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(79,75,54, 0.2), 1.8em -1.8em 0 0em rgba(79,75,54, 0.2), 2.5em 0em 0 0em rgba(79,75,54, 0.2), 1.75em 1.75em 0 0em rgba(79,75,54, 0.2), 0em 2.5em 0 0em rgba(79,75,54, 0.5), -1.8em 1.8em 0 0em rgba(79,75,54, 0.7), -2.6em 0em 0 0em #4f4b36, -1.8em -1.8em 0 0em rgba(79,75,54, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(79,75,54, 0.2), 1.8em -1.8em 0 0em rgba(79,75,54, 0.2), 2.5em 0em 0 0em rgba(79,75,54, 0.2), 1.75em 1.75em 0 0em rgba(79,75,54, 0.2), 0em 2.5em 0 0em rgba(79,75,54, 0.2), -1.8em 1.8em 0 0em rgba(79,75,54, 0.5), -2.6em 0em 0 0em rgba(79,75,54, 0.7), -1.8em -1.8em 0 0em #4f4b36;
  }
`;

const Loader = styled.div`
  margin: 100px auto;
  font-size: 25px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${load5} 1.1s infinite ease;
  transform: translateZ(0);
`;

export default class Loading extends Component {
  render() {
    return (
      <Loader>Loading...</Loader>
    )
  }
}
