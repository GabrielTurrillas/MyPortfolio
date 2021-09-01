import React from 'react'
import StoryRouter from 'storybook-react-router'
import { Default as Home } from '../Home/stories/Home.stories'
import { Default as NavBar } from '../../components/Navbar/stories/Navbar.stories'
import { LenguajeProvider } from '../../components/Context/LenguageContext'
import { homeDefaultData } from '..'

export default {
  title: 'Pages/HomeWithNav',
  decorators: [
    StoryRouter(),
    (Story) => (
      <LenguajeProvider>
        <Story />
      </LenguajeProvider>
    )
  ]
}


export const HomeWithNav = () => (
  <>
    <NavBar />
    <Home {...homeDefaultData} />
  </>
)


