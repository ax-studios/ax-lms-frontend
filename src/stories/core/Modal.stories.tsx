import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { CTA, Modal } from '../../components/core';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'core/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [modalState, setModalState] = useState(false);
  const handleModalSate = (): void => setModalState((p) => !p);
  return (
    <div className="relative flex h-96 w-full items-center justify-center">
      <CTA onClick={() => handleModalSate()}>Open Modal</CTA>
      <Modal
        {...args}
        modalState={modalState}
        handleModalSate={handleModalSate}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  children: 'This is Modal',
  modalState: false,
};

export const withComponent = Template.bind({});
withComponent.args = {
  id: 'default',
  children: (
    <div className=" rounded-lg  border-2 border-primary p-5 ">
      This is Another compoent
    </div>
  ),
  modalState: false,
};
