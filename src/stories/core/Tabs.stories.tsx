import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Tabs } from '../../components/core';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'core/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return <Tabs value={value} setValue={setValue} tabs={args.tabs} />;
};
export const Default = Template.bind({});
Default.args = {
  value: 'home',
  setValue: () => {},
  tabs: [
    { name: 'Home', value: 'home' },
    { name: 'Contact', value: 'contact' },
    { name: 'About', value: 'about' },
  ],
};
