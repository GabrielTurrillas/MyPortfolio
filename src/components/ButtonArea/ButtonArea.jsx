import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  device,
  colors
} from '../../styles';
import { PrimaryButton, SecondaryButton } from '..';

const ButtonArea = ({
  pagePrimaryButtonData,
  codeSecondaryButtonData
}) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <PrimaryButton {...pagePrimaryButtonData} />
        <SecondaryButton {...codeSecondaryButtonData} />
      </Container>
    </>
  )
}

export default ButtonArea;

const Container = styled.div`
  grid-area: ButtonArea;
  display:flex;
  justify-content:space-evenly;
  height:100%;
  padding:0 3rem;
  padding-bottom: 2rem;
  background:${colors.background};
  
  @media ${device.tablet}{
    justify-content:space-evenly;
    align-items:end;
    padding:0 20rem;
  }
  @media ${device.laptopL}{
    padding:3rem 22rem;
  }
`