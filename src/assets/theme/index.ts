import { theme, ThemeConfig } from "antd";

export const appTheme: ThemeConfig = {
  algorithm: [theme.compactAlgorithm, theme.darkAlgorithm],
  token: {
    colorPrimary: "var(--primary-color)",
    colorPrimaryBg: "var(--bg-primary-color)",
    colorBgLayout: "var(--bg-secondary-color)",
    colorBgBase: "var(--bg-primary-color)",
    boxShadow: "var(--btn-primary-shadow)",
  },
  components: {
    App: {
      colorPrimaryBg: "var(--bg-secondary-color)",
    },
    Input: {
      controlHeight: 42,
      colorPrimaryBg: "var(--input-primary-color)",
      colorBgContainer: "var(--input-primary-color)",
      colorBorder: "var(--input-primary-color)",
    },
    Button: {
      controlHeight: 36,
      colorPrimary: "var(--btn-primary-color)",
      colorPrimaryHover: "var(--btn-primary-hover-color)",
      colorPrimaryActive: "var(--btn-primary-active-color)",
      boxShadow: "var(--btn-primary-shadow)",
    },
    Layout: {
      colorBgHeader: "var(--bg-secondary-color)",
    },
    Menu: {
      colorPrimary: "var(--btn-primary-color)",
      colorItemBgSelected: "var(--btn-primary-color)",
      colorItemTextSelected: "var(--text-primary-color)",
      colorItemBgHover: "var(--menu-primary-hover-color)",
      colorItemBg: "var(--bg-secondary-color)",
      colorBgContainer: "red",
      colorSubItemBg: "var(--bg-secondary-color)",
    },
    Table: {
      colorBgContainer: "var(--bg-secondary-color)",
    },
    Switch: {
      colorPrimary: "var(--btn-primary-color)",
      colorPrimaryHover: "var(--btn-primary-hover-color)",
      colorPrimaryActive: "var(--btn-primary-active-color)",
      colorBgMask: "red",
    },
    Select: {
      // which color token is for background of the select input?
      colorBgContainer: "var(--input-primary-color)",
      // which color token is for background of the select dropdown?
    },
    Dropdown: {
      colorBgContainer: "var(--bg-secondary-color)",
    }
  },
};
