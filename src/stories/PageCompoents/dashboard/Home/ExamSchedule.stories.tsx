import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExamSchedule } from '../../../../components/pages/dashboard/Home';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'PageComponents/dashboard/Home/ExamSchedule',
  component: ExamSchedule,
} as ComponentMeta<typeof ExamSchedule>;

const Template: ComponentStory<typeof ExamSchedule> = (args) => (
  <ExamSchedule {...args} />
);

export const Default = Template.bind({});
Default.args = {};
