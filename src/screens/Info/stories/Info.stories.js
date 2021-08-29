import Info from '../Info';
import {
  defaultData,
  textStartFalseData,
  defaultWorksInfoData,
  worksInfoTextStartFalseData
} from './data'

export default {
  title: 'Screens/Info',
  component: Info,
};

const Template = (args) => <Info {...args} />;

export const Default = Template.bind({});
export const DefaultWorksInfo = Template.bind({});
export const TextStartFalse = Template.bind({});
export const WorksInfoTextStartFalse = Template.bind({});

Default.args = { ...defaultData }
TextStartFalse.args = { ...textStartFalseData }
DefaultWorksInfo.args = { ...defaultWorksInfoData }
WorksInfoTextStartFalse.args = { ...worksInfoTextStartFalseData }





