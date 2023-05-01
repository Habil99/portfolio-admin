import { Layout, theme } from "antd";
import styles from "../styles/dashboard.module.scss";
import { Outlet } from "react-router-dom";
import { LayoutAnimationWrapper } from "components";

const Content = () => {
  const { token } = theme.useToken();

  return (
    <Layout.Content
      className={styles.content}
      style={{ backgroundColor: token.colorBgBase }}
    >
      {/*<LayoutAnimationWrapper>*/}
        <Outlet />
      {/*</LayoutAnimationWrapper>*/}
    </Layout.Content>
  );
};

export default Content;
