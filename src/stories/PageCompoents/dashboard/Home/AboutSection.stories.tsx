import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AboutSection } from '../../../../components/pages/dashboard/Profile';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'PageComponents/dashboard/Profile/AboutSection',
  component: AboutSection,
} as ComponentMeta<typeof AboutSection>;

const Template: ComponentStory<typeof AboutSection> = (args) => (
  <AboutSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
