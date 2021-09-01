import Home from '../Home';
import StoryRouter from 'storybook-react-router';
import { defaultData } from './data'
import { LenguajeProvider } from '../../../components/Context/LenguageContext'

export default {
  title: 'Pages/Home',
  component: Home,
  decorators: [
    StoryRouter(),
    (Story) => (
      <LenguajeProvider>
        <Story />
      </LenguajeProvider>
    )
  ],
}

const Template = (args) => <Home {...args} />

export const Default = Template.bind({})

Default.args = {
  ...defaultData
}

/* hero: { ...defaultHeroData },
works: { ...defaultWorksData },
info: { ...defaultInfoData },
technologies: { ...defaultTechnologiesData }, */
