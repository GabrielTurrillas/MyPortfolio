import React from 'react'
import styled from 'styled-components'
import { Info, } from '..'
import {
  GlobalStyles,
  colors,
  device
} from '../../styles'
import { ButtonArea } from '../../components'


const Works = ({
  imgAreaData,
  textAreaData,
  textStart,
  buttonAreaData,
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
        <Info {...infoData} />
        <ButtonArea {...buttonAreaData} />
      </Container>
    </>
  )
}

export default Works;

const Container = styled.div`
  background: ${colors.background};  
`