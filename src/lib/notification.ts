import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

type PlacementType = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

type NotificationConfig = {
  placement: PlacementType;
  duration: number;
}

const notificationConfig: NotificationConfig = {
  placement: "topRight",
  duration: 3,
};

const makeNotification = (type: NotificationType, message: string, description: string) => {
  notification[type]({
    message,
    description,
    ...notificationConfig,
  });
};

export const notifyError = (description: string) => {
  makeNotification("error", "Error occurred!", description);
};

export const notifySuccess = (message: string, description: string) => {
  makeNotification("success", message, description);
};

export const notifyWarning = (message: string, description: string) => {
  makeNotification("warning", message, description);
};

export const notifyInfo = (message: string, description: string) => {
  makeNotification("info", message, description);
};

export const notifyLoading = {
  open: (key: string, message = "Loading...") => {
    if (key) {
      notification.open({
        ...notificationConfig,
        message,
        description: "",
        key,
        duration: null,
      });
    }
  },
  close: (key: string) => {
    notification.destroy(key);
  },
};
