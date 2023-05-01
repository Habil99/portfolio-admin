import { Switch } from "antd";

interface BannerListSwitchProps {
  isActive: boolean;
}

const BannerListSwitch = ({ isActive }: BannerListSwitchProps) => {
  return (
    <Switch
      defaultChecked={isActive}
      disabled
    />
  );
};

export default BannerListSwitch;
