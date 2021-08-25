import SecondaryButton from '../SecondaryButton';
import StoryRouter from 'storybook-react-router'
import {
  defaultData,
  worksCodeData
} from './data'

export default {
  title: 'Components/SecondaryButton',
  component: SecondaryButton,
  decorators: [StoryRouter()],
  parameters: {
    layout: 'centered'
  }
}

const Template = (args) => <SecondaryButton {...args} />

export const Default = Template.bind({})
export const worksCode = Template.bind({})

Default.args = { ...defaultData }

worksCode.args = { ...worksCodeData }