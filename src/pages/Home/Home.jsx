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
  const toggleSwitch = () => {
    setEnglish(!english)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} english={english} toggleSwitch={toggleSwitch} />
      <Navbar setEnglish={setEnglish} toggle={toggle} english={english} toggleSwitch={toggleSwitch} />
      <Hero {...hero} english={english} />
      <Wrapper id='works'>
        <BigTitle {...worksTitle} english={english} />
        <Works {...works} english={english} />
        <Works {...worksTextStartFalse} english={english} id='works' />
      </Wrapper>
      <Wrapper id='habilities'>
        <BigTitle {...infoTitle} english={english} />
        <Info {...info} english={english} />
        <Info {...infoTextStartFalse} english={english} />
      </Wrapper>
      <Wrapper id='technologies'>
        <BigTitle {...technologiesTitle} english={english} />
        <Technologies {...technologies} english={english} />
      </Wrapper>
    </>
  )
}

export default Home

const Wrapper = styled.div`
  background:${colors.background};
`