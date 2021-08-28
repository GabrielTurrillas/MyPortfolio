import React from 'react'
import { Info, } from '..'
import { GlobalStyles } from '../../styles'
import { ButtonArea } from '../../components'


const Works = ({
  imgAreaData,
  textAreaData,
  buttonAreaData,
}) => {
  const infoData = {
    imgAreaData,
    textAreaData
  }
  return (
    <>
      <GlobalStyles />
      <Info {...infoData} />
      <ButtonArea {...buttonAreaData} />
    </>
  )
}

export default Works




