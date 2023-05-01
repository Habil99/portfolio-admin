import { createContext, useContext } from "react";
import { ModalStaticFunctions } from "antd/es/modal/confirm";

type NotificationContextType = Omit<ModalStaticFunctions, "warn">;

const ModalContext = createContext({} as NotificationContextType);

export const useModal = () => useContext(ModalContext);

export default ModalContext;
