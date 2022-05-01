import React, { Component } from 'react'
import Button from '../atoms/Button'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export default class SaveShareButtons extends Component {
  render() {
    return (
      <Flex>
        <Button>
          マイリスト
        </Button>
        <Button>
          シェア
        </Button>
      </Flex>
    )
  }
}
