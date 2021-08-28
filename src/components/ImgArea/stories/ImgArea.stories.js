import ImgArea from "../ImgArea";
import {
  infoData,
  worksData
} from './data';

export default {
  title: 'Components/ImgArea',
  component: ImgArea
};

const Template = (args) => <ImgArea {...args} />

export const InfoImageArea = Template.bind({})
export const WorkImageArea = Template.bind({})

InfoImageArea.args = { ...infoData }
WorkImageArea.args = { ...worksData }