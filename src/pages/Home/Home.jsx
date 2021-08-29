import React from 'react'
import { Hero, Works, Info, Technologies, BigTitle } from '../../screens';

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
      <Hero {...hero} />
      <BigTitle {...worksTitle} />
      <Works {...works} />
      <Works {...worksTextStartFalse} />
      <BigTitle {...infoTitle} />
      <Info {...info} />
      <Info {...infoTextStartFalse} />
      <BigTitle {...technologiesTitle} />
      <Technologies {...technologies} />
    </>
  )
}

export default Home

