import React from 'react'
import styled from 'styled-components'
import { Info, } from '..'
import {
  GlobalStyles,
  colors,
} from '../../styles'
import { ButtonArea } from '../../components'


const Works = ({
  imgAreaData,
  textAreaData,
  textStart,
  buttonAreaData,
  english
}) => {
  const infoData = {
    imgAreaData,
    textAreaData,
    textStart,
  }
  return (
    <>
      <GlobalStyles />
      <Container>
        <Info {...infoData} english={english} />
        <ButtonArea {...buttonAreaData} english={english} />
      </Container>
    </>
  )
}

export default Works;

const Container = styled.div`
  background: ${colors.background};  
`