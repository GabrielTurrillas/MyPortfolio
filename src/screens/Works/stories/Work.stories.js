import React from 'react';
import Works from '../Works';
import { defaultData } from './data';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Screens/Works',
  component: Works,
  decorators: [StoryRouter()]
};

const Template = (args) => <Works {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultData
};
