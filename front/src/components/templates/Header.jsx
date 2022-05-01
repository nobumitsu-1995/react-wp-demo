import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../atoms/Text';

const StyledHeader = styled.header`
  background-color: yellow;
  height: 70px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 70px;
  justify-content: space-between;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  gap: 30px;
  height: 70px;
  justify-content: space-between;
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Nav>
          <div>
            <Link to="/"><Text fontSize="20px" fontWeight="bold">LOGO</Text></Link>
          </div>
          <List>
            <li>
              <Link to="/category/idol"><Text fontWeight="bold">アイドル</Text></Link>
            </li>
            <li>
              <Link to="/category/variety"><Text fontWeight="bold">バラエティ</Text></Link>
            </li>
            <li>
              <Link to="/category/drama"><Text fontWeight="bold">ドラマ</Text></Link>
            </li>
          </List>
        </Nav>
      </StyledHeader>
    )
  }
}
