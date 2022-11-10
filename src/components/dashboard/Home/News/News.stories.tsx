import { ComponentMeta, ComponentStory } from '@storybook/react';
import { News } from '..';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'PageComponents/dashboard/Home/News',
  component: News,
} as ComponentMeta<typeof News>;

const Template: ComponentStory<typeof News> = (args) => <News {...args} />;

export const Default = Template.bind({});
Default.args = {};
