import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '../../components/core';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'core/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'string',
  className: 'text-xl',
};
