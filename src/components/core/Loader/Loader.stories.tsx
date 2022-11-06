import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from '..';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'core/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
