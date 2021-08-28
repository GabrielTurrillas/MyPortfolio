import React from 'react';
import styled from 'styled-components';
import { GlobalStyles, device } from '../../styles';


const ImgArea = ({ src, imgWidth }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Img imgWidth={imgWidth} src={src} />
      </Container>
    </>
  )
}

export default ImgArea

const Container = styled.div`
  grid-area: ImgArea;
  display: flex;
  align-items:center;
  justify-content:end;
  height:100%;
  padding:2rem 0;
`

const Img = styled.img`
  width: ${({ imgWidth: { mobileS } }) => mobileS};
  height:auto;
  @media ${device.tablet}{
    width:${({ imgWidth: { tablet } }) => tablet};
  }
  @media ${device.laptopL}{
    width:${({ imgWidth: { laptopL } }) => laptopL};
  }
`
