import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  colors,
  device,
  externalPadding,
  fontSizes,
  smallTitleFontSizes,
} from '../../styles';

import {
  PrimaryButton,
  SecondaryButton,
} from '../../components'

const Works = ({
  english,
  projectName,
  description,
  engDescription,
  imgURL,
  imgStart,
  pagePrimaryButtonData,
  codeSecondaryButtonData,
}) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <TextArea>
          <Title>
            {projectName}
          </Title>
          <Text>
            {english ? engDescription : description}
          </Text>
        </TextArea>
        <ImgArea>
          <Img src={imgURL} alt={projectName} />
        </ImgArea>
        <ButtonArea>
          <PrimaryButton {...pagePrimaryButtonData} />
          <SecondaryButton {...codeSecondaryButtonData} />
        </ButtonArea>
      </Container>
    </>
  )
}

export default Works;

const Container = styled.div`
  display: grid;
  grid-template-areas:'TextArea'
                      'ImgArea'
                      'ButtonArea';
                      height:100%;
                      background:${colors.background};
  color:white;
  padding: ${externalPadding.mobileS};
  align-items:center;
  text-align:center;
  @media ${device.mobileM} {
    padding:0 ${externalPadding.mobileM};
  }
  @media ${device.mobileL} {
    padding:0 ${externalPadding.mobileL};
    grid-template-rows: 3fr 2fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-rows: 2fr 1fr;
    grid-template-areas:'TextArea ImgArea'
                        'ButtonArea ButtonArea';
  }

`

const TextArea = styled.div`
  grid-area: TextArea;
  height:100%;
  @media ${device.mobileL}{
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
  @media ${device.tablet}{
    text-align:start;
    padding-right:4rem;
  }
`

const ImgArea = styled.div`
  grid-area: ImgArea;
  padding:2rem 0;
  height:100%;
  @media ${device.tablet}{
    display:flex;
    padding:0;
    align-items:center;
  }
`

const ButtonArea = styled.div`
  grid-area: ButtonArea;
  display:flex;
  justify-content:space-evenly;
  @media ${device.mobileL}{
    justify-content:space-between;
  }
  @media ${device.tablet}{
    justify-content:space-evenly;
  }
`

const Title = styled.h2`
  margin:2rem 0;
  @media ${device.mobileL}{
    font-size:${smallTitleFontSizes.mobileL};
    margin-bottom:4rem;
  }
  @media ${device.tablet}{
    margin-bottom:3rem;
  }
`

const Text = styled.article`
  @media ${device.mobileL}{
    font-size:${fontSizes.mobileL};
  }
`

const Img = styled.img`
  width:100%;
  height:auto;
  border-radius: 4px;
  @media ${device.tablet}{
    margin-top:1.5rem;
  }
`

