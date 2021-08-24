import Home from '../Home';
import StoryRouter from 'storybook-react-router';
import {
  defaultHeroData,
  defaultWorksData,
  defaultInfoData,
  defaultTechnologiesData
} from '../../../screens';
import { defaultData } from './data'

export default {
  title: 'Pages/Home',
  component: Home,
  decorators: [StoryRouter()],
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
