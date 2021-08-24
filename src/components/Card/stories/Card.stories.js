import Card from '../Card'
import { defaultData } from './data'

export default {
  title: 'Components/Card',
  component: Card
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})

Default.args = {
  technology: { ...defaultData }
}