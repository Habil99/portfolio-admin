import { App, Layout } from "antd";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <App>
      <Layout className="min-h-screen">
        <Layout.Content>
          <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-xl w-full">
              <Outlet />
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </App>
  );
};

export default AuthLayout;
