import { App, Layout } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { useState } from "react";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <App>
      <Layout hasSider>
        <Sidebar collapsed={collapsed} />
        <Layout className="h-screen">
          <Header toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
          <Content />
        </Layout>
      </Layout>
    </App>
  );
};

export default Dashboard;
