import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ClassSchedule } from '../../../../components/pages/dashboard/Home';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'PageComponents/dashboard/Home/ClassSchedule',
  component: ClassSchedule,
} as ComponentMeta<typeof ClassSchedule>;

const Template: ComponentStory<typeof ClassSchedule> = (args) => (
  <ClassSchedule {...args} />
);

export const Default = Template.bind({});
Default.args = {};
