import React from 'react'
import { Hero, Works, Info, Technologies } from '../../screens';


const Home = ({
  hero,
  works,
  info,
  technologies,
}) => {
  return (
    <>
      <Hero {...hero} />
      <Works {...works} />
      <Info {...info} />
      <Technologies {...technologies} />
    </>
  )
}

export default Home

