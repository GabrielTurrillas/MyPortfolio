import TextArea from "../TextArea";
import { defaultData } from './data'

export default {
  title: 'Components/TextArea',
  component: TextArea,
}

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

Default.args = { ...defaultData }