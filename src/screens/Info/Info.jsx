import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  device,
  externalPadding,
  colors,
} from '../../styles';
import {
  TextArea,
  ImgArea,
} from '../../components';

const Info = ({
  textAreaData,
  imgAreaData,
}) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <TextArea {...textAreaData} />
        <ImgArea {...imgAreaData} />
      </Container>
    </>
  )
}

export default Info

const Container = styled.div`
  display: grid;
  grid-template-rows:50% 50%;
  grid-template-areas:'TextArea'
                      'ImgArea';
  height: 100%; 
  background: ${colors.background};
  color: white;
  padding:0 ${externalPadding.mobileS};
  align-items:center;
  text-align:center;
  @media ${device.mobileM} {
    padding: ${externalPadding.mobileM};
  }
  @media ${device.mobileL} {
    padding:2rem ${externalPadding.mobileL};
    grid-template-rows: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:'TextArea ImgArea';
  }
  @media ${device.laptopL}{
    padding:0 ${externalPadding.laptopL}
  }
  @media ${device.desktop}{
    padding:4rem ${externalPadding.desktop};
  }
`
