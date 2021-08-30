import React from 'react';
import styled from 'styled-components';
import { GlobalStyles, colors, bigTitleFontSizes, device } from '../../styles';

const BigTitle = ({ text }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        {text}
      </Container>
    </>
  )
}

export default BigTitle

const Container = styled.div`
  display:flex;
  justify-content: center;
  background:${colors.background};
  color:white;
  padding-top:2rem;
  font-size:${bigTitleFontSizes.mobileS};
  font-weight:bold;
  @media ${device.mobileM} {
    font-size:2.7rem;
  }
  @media ${device.mobileL} {
    font-size:3.5rem;
  }
  @media ${device.tablet} {
    font-size:4rem;
    padding:2rem 0
  }
  @media ${device.laptopL}{
    font-size:6rem;
    padding:6rem 0;
  }
  @media ${device.desktop} {
    font-size:5rem;
  }
`