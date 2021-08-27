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
  background:${colors.background};
  @media ${device.mobileL}{
    justify-content:space-between;
  }
  @media ${device.tablet}{
    justify-content:space-evenly;
    align-items:end;
  }
  @media ${device.desktop}{
    padding:0 15rem;
  }
`