import React from 'react'
import { Info, } from '..'
import { GlobalStyles } from '../../styles'
import { ButtonArea } from '../../components'


const Works = ({
  english,
  title,
  text,
  engText,
  imgPath,
  imgStart,
  pagePrimaryButtonData,
  codeSecondaryButtonData,
}) => {
  const InfoData = {
    english,
    title,
    text,
    engText,
    imgPath,
    imgStart
  }

  const ButtonsData = {
    pagePrimaryButtonData,
    codeSecondaryButtonData
  }

  return (
    <>
      <GlobalStyles />
      <Info {...InfoData} />
      <ButtonArea {...ButtonsData} />
    </>
  )
}

export default Works




/* import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  colors,
  device,
  externalPadding,
  fontSizes,
  smallTitleFontSizes,
  lineHight,
} from '../../styles';

import {
  PrimaryButton,
  SecondaryButton,
  TextArea,
} from '../../components'

const Works = ({
  english,
  title,
  text,
  engText,
  imgPath,
  imgStart,
  pagePrimaryButtonData,
  codeSecondaryButtonData,
}) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <TextArea
          title={title}
          engTitle={title}
          text={text}
          engText={engText}
          english={english}
        />
        <ImgArea>
          <Img
            src={imgPath}
            alt={title}
          />
        </ImgArea>
        <ButtonArea>
          <PrimaryButton
            {...pagePrimaryButtonData}
          />
          <SecondaryButton
            {...codeSecondaryButtonData}
          />
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
  padding: 1rem ${externalPadding.mobileS};
  align-items:center;
  text-align:center;
  @media ${device.mobileM} {
    padding:${externalPadding.mobileM};
  }
  @media ${device.mobileL} {
    padding:2rem ${externalPadding.mobileL};
    grid-template-rows: 3fr 2fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-rows: 3fr 1fr;
    grid-template-columns:1fr 1fr;
    grid-template-areas:'TextArea ImgArea'
                        'ButtonArea ButtonArea';
    padding:3rem ${externalPadding.mobileL};
  }
  @media ${device.laptopL}{
    padding:4rem ${externalPadding.laptopL};

  }
  @media ${device.desktop}{
    padding:4rem ${externalPadding.desktop};
  }
`

const ImgArea = styled.div`
  grid-area: ImgArea;
  height:100%;
  padding:2rem 0;
  @media ${device.tablet}{
    display:flex;
    padding:0;
    align-items:end;
  }
  @media ${device.laptopL}{
    margin-left:5rem;
  }
`

const ButtonArea = styled.div`
  grid-area: ButtonArea;
  display:flex;
  justify-content:space-evenly;
  height:100%;
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

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
` */




