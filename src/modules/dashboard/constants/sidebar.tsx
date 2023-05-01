import {
  DashboardFilled,
  GroupOutlined,
  HomeFilled, InfoCircleFilled, InfoOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { store } from "store";
import userService from "store/user/user.service";

const getNavLink = (path: string, label: string) => (
  <NavLink to={path} className="sidebar__link">
    {label}
  </NavLink>
);

export const sidebarItems = [
  {
    key: "dashboard",
    label: getNavLink("/", "Dashboard"),
    icon: <DashboardFilled />,
    path: "/",
  },
  {
    key: "portfolio",
    label: "Portfolio",
    icon: <GroupOutlined />,
    path: "/portfolio",
    children: [
      {
        key: "banner",
        label: getNavLink("/portfolio/banner", "Banner"),
        icon: <HomeFilled />,
        path: "/portfolio/banner",
      },
      {
        key: "about",
        label: getNavLink("/portfolio/about", "About"),
        icon: <InfoCircleFilled />,
        path: "/portfolio/about",
      },
    ],
  },
  {
    key: "logout",
    label: "Logout",
    icon: <LogoutOutlined />,
    onClick: () => {
      store.dispatch(userService.logout())
        .unwrap()
        .then(() => {
          window.location.reload();
        });
    },
  },
];
