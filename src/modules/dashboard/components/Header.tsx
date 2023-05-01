import { Avatar, Button, Layout, Typography } from "antd";
import styles from "../styles/dashboard.module.scss";
import { useGetUserSelector } from "../../auth/services/auth.service";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

interface HeaderProps {
  toggleCollapsed: () => void;
  collapsed: boolean;
}

const Header = ({ collapsed, toggleCollapsed }: HeaderProps) => {
  const user = useSelector(useGetUserSelector);

  return (
    <Layout.Header
      className={styles.header}
      style={{ backgroundColor: "#262b3c" }}
    >
      <div>
        <Button type="ghost" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className={styles.header_avatar_wrapper}>
        <Typography.Title level={4}>
          {user.data?.data.username}
        </Typography.Title>
        <Avatar
          style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
          size="large"
        >
          {user.data?.data.username[0].toUpperCase()}
        </Avatar>
      </div>
    </Layout.Header>
  );
};

export default Header;
