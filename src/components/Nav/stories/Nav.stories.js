import Nav from '../Nav';
import { defaultData } from './data'

export default {
  title: 'Components/Nav',
  component: Nav
}

const Template = (args) => <Nav {...args} />

export const Default = Template.bind({})

Default.args = { ...defaultData }