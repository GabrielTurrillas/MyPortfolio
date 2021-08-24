import PrimaryButton from "../PrimaryButton";
import StoryRouter from 'storybook-react-router'
import {
  heroData,
  worksPageData,
  worksCodeData,
} from './data'

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  decorators: [StoryRouter()],
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <PrimaryButton {...args} />

export const heroButton = Template.bind({})
export const worksPageButton = Template.bind({})
export const worksCodeButton = Template.bind({})

heroButton.args = {
  ...heroData
};

worksPageButton.args = {
  ...worksPageData
};

worksCodeButton.args = {
  ...worksCodeData
}