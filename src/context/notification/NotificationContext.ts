import { createContext, useContext } from "react";

type NotificationContextType = {
  notifyError: (description: string) => void;
  notifySuccess: (message: string, description?: string) => void;
  notifyWarning: (message: string, description: string) => void;
  notifyInfo: (message: string, description: string) => void;
}

const NotificationContext = createContext({} as NotificationContextType);

export const useNotification = () => useContext(NotificationContext);

export default NotificationContext;
