import { FC, ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
  modalState: boolean;
  handleModalSate: () => void;
}

const Modal: FC<Props> = ({ id, children, modalState, handleModalSate }) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={modalState}
        onChange={handleModalSate}
        className="modal-toggle"
      />
      <label
        htmlFor={id}
        className="modal cursor-pointer select-none backdrop-blur"
      >
        <label
          className="modal-box w-full max-w-[40rem] border-2 border-base-content/30"
          htmlFor=""
        >
          {children}
        </label>
      </label>
    </>
  );
};

export default Modal;
