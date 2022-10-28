import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Attendance } from '../../../../components/pages/dashboard/Home';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'PageComponents/dashboard/Home/Attendance',
  component: Attendance,
} as ComponentMeta<typeof Attendance>;

const Template: ComponentStory<typeof Attendance> = (args) => (
  <Attendance {...args} />
);

export const Default = Template.bind({});
Default.args = {};
