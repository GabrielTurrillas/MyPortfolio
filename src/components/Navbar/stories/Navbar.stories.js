import Navbar from '../Navbar';
import StoryRouter from 'storybook-react-router';
import { defaultData } from './data'
import { withReactContext } from 'storybook-react-context';
import { LenguajeProvider } from '../../Context/LenguageContext'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    StoryRouter(),
    (Story) => (
      <LenguajeProvider>
        <Story />
      </LenguajeProvider>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})

Default.args = { ...defaultData }