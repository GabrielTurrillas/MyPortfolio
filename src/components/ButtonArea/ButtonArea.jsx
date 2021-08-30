import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  device,
  colors,
  externalPadding,
} from '../../styles';
import {
  PrimaryButton,
  SecondaryButton
} from '..';

const ButtonArea = ({
  pagePrimaryButtonData,
  codeSecondaryButtonData,
  textStart = true
}) => {
  return (
    <>
      <GlobalStyles />
      <Container textStart={textStart}>
        <PrimaryButtonA {...pagePrimaryButtonData} />
        <SecondaryButton {...codeSecondaryButtonData} />
      </Container>
    </>
  )
}

export default ButtonArea;

const Container = styled.div`
  grid-area: ButtonArea;
  display:flex;
  justify-content:center;
  height:100%;
  background:${colors.background};
  @media ${device.mobileL}{
    padding:0 ${externalPadding.mobileL};
  }
  @media ${device.tablet}{
    justify-content:start;
    align-items:end;
  }
  @media ${device.laptopL}{
    padding:0 ${externalPadding.laptopL};
    padding-top:1rem;
  }
  @media ${device.desktop}{
    padding:0 ${externalPadding.desktop};
  }
`

const PrimaryButtonA = styled(PrimaryButton)`
  margin-right:2rem;
`