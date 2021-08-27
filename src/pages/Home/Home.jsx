import React from 'react'
import { Hero, Works, Info, Technologies, BigTitle } from '../../screens';


const Home = ({
  hero,
  works,
  info,
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
      <Works {...works} />
      <BigTitle {...infoTitle} />
      <Info {...info} />
      <Info {...info} />
      <BigTitle {...technologiesTitle} />
      <Technologies {...technologies} />
    </>
  )
}

export default Home

