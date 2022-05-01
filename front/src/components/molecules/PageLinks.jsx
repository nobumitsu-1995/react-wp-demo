import React, { Component } from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import { Link } from "react-router-dom"

const Flex = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 10px;
`;

export default class PageLinks extends Component {
  render() {
    return (
      <Flex>
        {this.props.prev === 0 ?
          <Text color="#ccc">
            前のストーリー
          </Text> :
          <Link to={`/post/${this.props.prev}`}>
            前のストーリー
          </Link>
        }
        <Link to={`/content/${this.props.top}`}>
          番組トップ
        </Link>
        {this.props.next === 0 ?
          <Text color="#ccc">
            次のストーリー
          </Text> :
          <Link to={`/post/${this.props.next}`}>
            次のストーリー
          </Link>
        }
      </Flex>
    )
  }
}
