import React, { Component } from 'react'
import styled from 'styled-components';

const AccordionBody = styled.div`
  max-height: 185px;
  overflow: hidden;

  ${({open, height}) => {
    return open && `
      max-height: ${height}px;
    `;
  }}
`;

const ButtonArea = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const Button = styled.button`
  font-weight: bold;
`;

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  render() {
    const height = document.getElementById('body')?.clientHeight;
    
    const handleClickButton = () => {
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }

    return (
      <div>
        <AccordionBody height={height} open={this.state.isOpen}>
          <div id='body'>
          {this.props.children}
          </div>
        </AccordionBody>
        {
          height > 185 &&
          <ButtonArea>
            <Button type='button' onClick={handleClickButton}>
              {this.state.isOpen ? "元に戻す" :
                "もっと見る"
              }
            </Button>
          </ButtonArea>
        }
      </div>
    )
  }
}
