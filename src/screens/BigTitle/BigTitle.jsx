import React from 'react';
import styled from 'styled-components';
import { GlobalStyles, colors, bigTitleFontSizes } from '../../styles';

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
  padding:3rem 0;
  font-size:${bigTitleFontSizes.mobileS};
  font-weight:bold;
`