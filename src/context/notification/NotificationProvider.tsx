import { notification } from "antd";
import NotificationContext from "./NotificationContext";
import { FC, PropsWithChildren } from "react";

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [
    notificationApi,
    contextHolder,
  ] = notification.useNotification();

  const makeNotification =
    (type: "success" | "info" | "warning" | "error", message: string, description: string) => {
      notificationApi[type]({
        message,
        description,
      });
    };

  const notifyError = (description: string) => {
    makeNotification("error", "Error occured!", description);
  };

  const notifySuccess = (message: string, description?: string) => {
    if (!description)
      description = "Operation completed successfully!";
    makeNotification("success", message, description);
  };

  const notifyWarning = (message: string, description: string) => {
    makeNotification("warning", message, description);
  };

  const notifyInfo = (message: string, description: string) => {
    makeNotification("info", message, description);
  };

  return (
    <NotificationContext.Provider value={{
      notifyError,
      notifySuccess,
      notifyWarning,
      notifyInfo,
    }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
