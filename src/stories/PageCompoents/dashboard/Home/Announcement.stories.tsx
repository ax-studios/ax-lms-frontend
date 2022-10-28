import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Announcement } from '../../../../components/pages/dashboard/Home';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'PageComponents/dashboard/Home/Announcement',
  component: Announcement,
} as ComponentMeta<typeof Announcement>;

const Template: ComponentStory<typeof Announcement> = (args) => (
  <Announcement {...args} />
);

export const Default = Template.bind({});
Default.args = {};
