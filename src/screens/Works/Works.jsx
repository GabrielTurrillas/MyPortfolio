import React from 'react'
import { Info, } from '..'
import { GlobalStyles } from '../../styles'
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
      <Info {...infoData} />
      <ButtonArea {...buttonAreaData} />
    </>
  )
}

export default Works;