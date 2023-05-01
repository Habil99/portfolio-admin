import { Button, Layout, Menu } from "antd";
import styles from "../styles/dashboard.module.scss";
import { sidebarItems } from "../constants/sidebar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => {
  const location = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([sidebarItems[0].key]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([sidebarItems[0].key]);

  const handleDefaultSelectedKeys = () => {
    const selectedKeys = sidebarItems
      .filter((item) => item.path === location.pathname)
      .map((item) => item.key);

    if (selectedKeys.length === 0) {
      sidebarItems.forEach((item) => {
        if (item.children) {
          const activeKey = item.children
            .find((child) => child.path === location.pathname)
            ?.key;

          if (activeKey) {
            selectedKeys.push(activeKey);

            setDefaultOpenKeys([item.key]);
          }
        }
      });
    }

    setDefaultSelectedKeys(selectedKeys);
  };

  useEffect(() => {
    handleDefaultSelectedKeys();
  }, [location.pathname]);

  return (
    <Layout.Sider
      className={styles.sidebar}
      width={320}
      collapsedWidth={100}
      collapsed={collapsed}
    >
      <div
        className={styles.sidebar__header}>
        <img
          src={collapsed ? "/logo-dark-small.svg" : "/logo-dark.svg"}
          alt=""
        />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        className={styles.sidebar__menu}
        style={{
          borderInlineEnd: "none",
        }}
        items={sidebarItems}
      >
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
