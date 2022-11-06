import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AuthWrapper } from '..';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'PageComponents/auth/AuthWrapper',
  component: AuthWrapper,
} as ComponentMeta<typeof AuthWrapper>;

const Template: ComponentStory<typeof AuthWrapper> = (args) => (
  <AuthWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <h1>Wrapper For login, Forgot Password and Register Page</h1>,
};
