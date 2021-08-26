import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  device,
  externalPadding,
  colors,
  fontSizes,
  smallTitleFontSizes
} from '../../styles';

const Info = ({ english, infoImgSrc, engTitle, title, engText, text }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <TextArea>
          <Title>
            {english ? engTitle : title}
          </Title>
          <Text>
            {english ? engText : text}
          </Text>
        </TextArea>
        <ImgArea>
          <Img src={infoImgSrc} />
        </ImgArea>
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
  padding: ${externalPadding.mobileS};
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

const TextArea = styled.div`
  grid-area: TextArea;
  height:100%;
  //background:blue;
  @media ${device.mobileL}{
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
  @media ${device.tablet} {
    text-align:start;
    padding-right:4rem;
  }
  @media ${device.laptopL}{
    padding-right:4rem;
  }
`

const ImgArea = styled.div`
  grid-area: ImgArea;
  padding:0 2rem;
  height:100%;
  padding:2rem 0;
  @media ${device.laptopL}{
    padding-left:8rem;
  }
`

const Title = styled.h2`
  margin: 2rem 0;
  @media ${device.mobileL}{
    font-size:${smallTitleFontSizes.mobileL};
    margin-bottom:4rem;
  }
  @media ${device.desktop}{
    font-size:${smallTitleFontSizes.desktop};
  }
`

const Text = styled.article`
  line-height:1.5rem;
  @media ${device.mobileL}{
    font-size:${fontSizes.mobileL};
  }
  @media ${device.tablet}{
    font-size: ${fontSizes.tablet}
  }
  @media ${device.desktop}{
    line-height:1.9rem;
    font-size:${fontSizes.desktop};
  }
`

const Img = styled.img`
  height:100%;
  width:100%;
`