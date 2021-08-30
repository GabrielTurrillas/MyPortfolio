import React from 'react'
import styled from 'styled-components'
import {
  Hero,
  Works,
  Info,
  Technologies,
  BigTitle
} from '../../screens';
import { colors } from '../../styles';

const Home = ({
  hero,
  works,
  worksTextStartFalse,
  info,
  infoTextStartFalse,
  technologies,
  infoTitle,
  technologiesTitle,
  worksTitle,
}) => {
  console.log('worksTitle', worksTitle)
  return (
    <>
      <Container>
        <Hero {...hero} />
        <BigTitle {...worksTitle} />
        <Works {...works} />
        <Works {...worksTextStartFalse} />
        <BigTitle {...infoTitle} />
        <Info {...info} />
        <Info {...infoTextStartFalse} />
        <BigTitle {...technologiesTitle} />
        <Technologies {...technologies} />
      </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  background:${colors.background};
`
