import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  colors,
  device,
  externalPadding,
} from '../../styles';

import {
  PrimaryButton,
} from '../../components'

const Works = ({
  english,
  projectName,
  description,
  engDescription,
  imgURL,
  pageURL,
  githubURL,
  imgStart,
  worksPagePrimaryButtonData,
  worksCodePrimaryButtonData,
}) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <TextArea>
          <Title>
            DerivApp
          </Title>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, impedit esse possimus ipsam debitis veniam hic, facilis molestias sed neque quisquam veritatis? Quidem, eligendi illum quam asperiores dolores ullam odit.
          </Text>
        </TextArea>
        <ImgArea>
          <Img src={imgURL} alt={projectName} />
        </ImgArea>
        <ButtonArea>
          <PrimaryButton {...worksPagePrimaryButtonData} />
          <PrimaryButton {...worksCodePrimaryButtonData} />
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
  height:100vh;
  background:${colors.background};
  color:white;
  padding:${externalPadding.mobileS};
  align-items:center;
  text-align:center;
  `

const TextArea = styled.div`
  grid-area: TextArea;
`

const ImgArea = styled.div`
  grid-area: ImgArea;
  padding:0 2rem;
`

const ButtonArea = styled.div`
  grid-area: ButtonArea;
  display:flex;
  justify-content:space-evenly;
`

const Title = styled.h2`
  margin:2rem 0;
`

const Text = styled.article`

`

const Img = styled.img`
  height:100%;
  width:100%;
`

/* import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  device,
  externalPadding,
} from '../../styles';

const Works = ({
  english,
  projectName,
  description,
  engDescription,
  imgURL,
  pageURL,
  githubURL,
  imgStart }) => {
  return (
    <>
      <GlobalStyles />
      <WorksContainer imgStart={imgStart}>
        <WorkArea>
          <ProjectName>{projectName}</ProjectName>
          <Description>
            {english ? description : engDescription}
          </Description>
        </WorkArea>
        <ImgArea>
          <Img src={imgURL} alt={projectName} />
        </ImgArea>
        <BtnsArea>
          <Button
            href={pageURL}
            big={false}
          > {english ? 'Go to the Page' : 'Ir a la Página'}
          </Button>
          <Button
            href={githubURL}
            big={false}
          > {english ? 'Go to the Code' : 'Ir al Código'}
          </Button>
        </BtnsArea>
      </WorksContainer>
    </>
  )
}

export default Works


const WorksContainer = styled.div`
  color: #f7f8fa;
  background: #010606;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr 1fr;
  font-family:'Didact Gothic', sans-serif;
  justify-content: center;
  padding:${externalPadding.mobileS};
  @media ${device.mobileS} {
    grid-template-rows: repeat(3,1fr);
  }
  @media ${device.mobileM} {
    justify-content:center;
    grid-template-rows: repeat(3, 2fr);
  }
  @media ${device.mobileL} {
    padding:0 2rem;
  }
  @media ${device.tablet}{
    font-size:25px;
    grid-template-rows: repeat(2, 2fr) 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows:2fr 1fr;
    grid-template-areas: ${({ imgStart }) => (imgStart ? "'col2 col1' 'buttons buttons'" : "'col1 col2' 'buttons buttons'")}
  }
`;

const WorkArea = styled.div`
  display: flex;
  text-align:center;
  justify-content:center;
  flex-direction:column;
  padding:0 1rem;
  @media ${device.tablet}{
    padding:2rem;
  }
  @media ${device.laptop} {
    grid-area:col1;
  }
`

const ImgArea = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  @media ${device.laptop} {
    grid-area:col2;
  }
`

const BtnsArea = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:0 2rem;
  @media ${device.tablet}{
    flex-direction:row;
  }
  @media ${device.laptop} {
    grid-area:buttons;
  }
`

const ProjectName = styled.h2`
  height: fit-content;
  padding:1rem;
`

const Description = styled.article`
  display:flex;
  height: fit-content;
`


const Img = styled.img`
  border-radius:5px;
  max-width: 80%;
  height: auto;
`;


const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: solid;
  border-color:#01BF71;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  margin:1rem;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  };
` */



