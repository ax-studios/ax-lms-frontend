import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../../components/core';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'core/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'reandomId',
  displayName: 'Full Name',
  name: 'name',
  type: 'text',
  placeholder: 'Enter your full name',
  value: '',
  onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'reandomId',
  displayName: 'Full Name',
  name: 'name',
  type: 'text',
  placeholder: 'Enter your full name',
  value: '',
  onChange: () => {},
  disabled: true,
};

export const password = Template.bind({});
password.args = {
  id: 'reandomId',
  displayName: 'Full Name',
  name: 'name',
  type: 'password',
  placeholder: 'Enter your full name',
  value: 'password',
  onChange: () => {},
};

export const customized = Template.bind({});
customized.args = {
  id: 'reandomId',
  displayName: 'Full Name',
  name: 'name',
  type: 'text',
  placeholder: 'Enter your full name',
  value: 'password',
  onChange: () => {},
  className: 'input-primary',
};
