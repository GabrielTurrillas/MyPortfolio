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

const TextArea = styled.div`
  grid-area: TextArea;
  height:100%;
  //background:red;
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

const Title = styled.h2`
  margin-bottom:2rem;
  @media ${device.mobileL}{
    font-size:${smallTitleFontSizes.mobileL};
    margin-bottom:4rem;
  }
  @media ${device.tablet}{
    margin-bottom:3rem;
  }
  @media ${device.desktop}{
    font-size:${smallTitleFontSizes.desktop};
    margin-bottom:4rem;
  }
`

const Text = styled.article`
  line-height:1.5rem;
  @media ${device.mobileL}{
    font-size:${fontSizes.mobileL};
  }
  @media ${device.laptopL}{
    font-size:${fontSizes.laptopL};
  }
  @media ${device.desktop}{
    line-height:1.9rem;
    font-size:${fontSizes.desktop};
  }
`

const Img = styled.img`
  width:100%;
  height:auto;
  border-radius: 4px;
  @media ${device.tablet}{
    
  }
`

