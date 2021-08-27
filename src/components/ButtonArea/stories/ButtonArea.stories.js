import ButtonArea from "../ButtonArea";
import StoryRouter from "storybook-react-router";
import { defaultData } from './data'

export default {
  title: 'Components/ButtonArea',
  component: ButtonArea,
  decorators: [StoryRouter()]
}

const Template = (args) => <ButtonArea {...args} />

export const Default = Template.bind({})

Default.args = { ...defaultData }