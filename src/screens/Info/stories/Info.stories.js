import Info from '../Info';
import { defaultData } from './data'

export default {
  title: 'Screens/Info',
  component: Info,
};

const Template = (args) => <Info {...args} />;

export const Default = Template.bind({});

Default.args = { ...defaultData }





