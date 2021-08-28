import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  fontSizes,
  device,
  lineHight,
  smallTitleFontSizes,
  colors,
} from '../../styles'


const TextArea = ({
  title,
  engTitle,
  text,
  engText,
  english,
}) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>
          {english ? engTitle : title}
        </Title>
        <Text>
          {english ? engText : text}
        </Text>
      </Container>
    </>
  )
}

export default TextArea

const Container = styled.div`
  grid-area: TextArea;
  height:100%;
  background:${colors.background};
  color:white;
  display:flex;
  flex-direction:column;
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
  line-height:${lineHight.mobileS};
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