import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles';
import {
  Hero,
  Works,
  Info,
  Technologies,
  BigTitle
} from '../../screens';
import {
  Navbar,
  Sidebar
} from '../../components';



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
  const [english, setEnglish] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar setEnglish={setEnglish} toggle={toggle} english={english} />
      <Container>
        <Hero {...hero} english={english} />
        <BigTitle {...worksTitle} english={english} />
        <Works {...works} english={english} />
        <Works {...worksTextStartFalse} english={english} />
        <BigTitle {...infoTitle} english={english} />
        <Info {...info} english={english} />
        <Info {...infoTextStartFalse} english={english} />
        <BigTitle {...technologiesTitle} english={english} />
        <Technologies {...technologies} english={english} />
      </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  background:${colors.background};
`
