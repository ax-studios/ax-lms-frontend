import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CTA } from '../components/core';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Core/CTA',
  component: CTA,
} as ComponentMeta<typeof CTA>;

const Template: ComponentStory<typeof CTA> = (args) => <CTA {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  children: 'Submit',
  onClick: () => {},
  disabled: false,
  type: 'filled',
};
export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Submit',
  onClick: () => {},
  disabled: false,
  type: 'outline',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Submit',
  onClick: () => {},
  disabled: true,
  type: 'filled',
};
