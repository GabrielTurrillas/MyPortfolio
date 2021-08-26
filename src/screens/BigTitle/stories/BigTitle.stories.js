import BigTitle from '../BigTitle';
import {
  defaultData,
  worksData,
  infoData,
  technologiesData,
} from './data'

export default {
  title: 'Screens/BigTitle',
  component: BigTitle
}

const Template = (args) => <BigTitle {...args} />

export const Default = Template.bind({});
export const WorksTitle = Template.bind({});
export const InfoTitle = Template.bind({});
export const TechnologiesTitle = Template.bind({});

Default.args = { ...defaultData }
WorksTitle.args = { ...worksData }
InfoTitle.args = { ...infoData }
TechnologiesTitle.args = { ...technologiesData }