import Technologies from "../Technologies";
import { defaultData } from './data'

export default {
  title: 'Screens/Technologies',
  component: Technologies
};

const Template = (args) => <Technologies {...args} />

export const Default = Template.bind({});

Default.args = { ...defaultData }
