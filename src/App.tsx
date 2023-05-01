import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { NotificationProvider } from "./context";
import { AuthProvider } from "./modules/auth";
import ModalProvider from "./context/modal/ModalProvider";

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <NotificationProvider>
          <RouterProvider router={routes} />
        </NotificationProvider>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
