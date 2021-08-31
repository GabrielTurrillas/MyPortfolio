import Sidebar from "../Sidebar";
import { defaultData } from './data'

export default {
  title: 'Components/Sidebar',
  component: Sidebar
}

const Template = (args) => <Sidebar {...args} />

export const Default = Template.bind({})

Default.args = { ...defaultData }