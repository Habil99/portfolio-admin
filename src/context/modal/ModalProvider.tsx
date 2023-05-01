import { Modal } from "antd";
import ModalContext from "./ModalContext";
import { FC, PropsWithChildren } from "react";

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [
    modal,
    contextHolder,
  ] = Modal.useModal();
  return (
    <ModalContext.Provider value={modal}>
      {contextHolder}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
