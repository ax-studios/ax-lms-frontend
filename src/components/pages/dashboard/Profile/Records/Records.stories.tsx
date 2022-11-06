import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Records } from '..';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'PageComponents/dashboard/Profile/Records',
  component: Records,
} as ComponentMeta<typeof Records>;

const Template: ComponentStory<typeof Records> = (args) => (
  <Records {...args} />
);

export const Default = Template.bind({});
Default.args = {};
