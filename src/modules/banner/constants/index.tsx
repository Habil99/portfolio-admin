import { Banner } from "../types/index.type";
import BannerListSwitch from "modules/banner/components/BannerListSwitch";
import BannerListActions from "modules/banner/components/BannerListActions";

export const bannerListColumns = [
  // TODO: return ID from server
  // {
  //   dataIndex: "id",
  //   title: "ID",
  // },
  {
    dataIndex: "username",
    title: "Username",
  },
  {
    dataIndex: "title",
    title: "Title",
  },
  {
    dataIndex: "description",
    title: "Description",
  },
  {
    dataIndex: "isActive",
    title: "Active",
    render: (isActive: boolean) => <BannerListSwitch isActive={isActive} />,
  },
  {
    dataIndex: "",
    title: "Actions",
    render: (cell: Banner) => <BannerListActions data={cell} />,
    align: "right" as "right", // to fix antd error, align: 'right' is not assignable to type 'AlignType'
  },
];

export const CREATE_BANNER_FORM_RULES = {
  username: [{
    required: true,
    message: "Please input username!",
  }],
  title: [{
    required: true,
    message: "Please input title!",
  }],
  description: [{
    required: true,
    message: "Please input description!",
  }],
};
