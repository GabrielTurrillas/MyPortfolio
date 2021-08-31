import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  colors,
  externalPadding
} from '../../styles';

const Nav = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ContentArea>
          Nav
        </ContentArea>
      </Container>
    </>
  )
}

export default Nav

const Container = styled.div`
  display:flex;
  background:${colors.navBackground};
  padding:0 7rem;
  align-items:center;
  justify-content:center;
  color:white;
  width:100vw;
  height:4rem;
`

const ContentArea = styled.div`
  background:red;
  width:100%;
`

