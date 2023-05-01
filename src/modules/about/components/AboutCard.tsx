import { Avatar, Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { About } from "../types/index.type";

interface AboutCardProps {
  data: About;
}

const AboutCard = ({ data }: AboutCardProps) => {
  return (
    <Card
      cover={
        <img
          alt="example"
          src={data.photo}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar src={data.photo} />
        }
        title="About me"
        description={data.description}
      />
    </Card>
  );
};

export default AboutCard;
