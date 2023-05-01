import { memo } from "react";
import { Banner } from "modules/banner/types/index.type";
import { Form, FormInstance, Input, Switch } from "antd";
import { CREATE_BANNER_FORM_RULES } from "modules/banner/constants";

interface BannerFormProps {
  handleSubmit: (values: Banner) => Promise<void>;
  form: FormInstance<Banner>;
}

const BannerForm = ({
                      handleSubmit,
                      form,
                    }: BannerFormProps) => {
  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      name="create-banner"
      layout="vertical"
      className="g-form-grid"
    >
      <Form.Item label="Username (for banner)" name="username"
                 rules={CREATE_BANNER_FORM_RULES.username}>
        <Input type="text" placeholder="Enter value" />
      </Form.Item>
      <Form.Item label="Title" name="title"
                 rules={CREATE_BANNER_FORM_RULES.title}>
        <Input type="text" placeholder="Enter value" />
      </Form.Item>
      <Form.Item label="Description" name="description"
                 rules={CREATE_BANNER_FORM_RULES.description}>
        <Input type="text" placeholder="Enter value" />
      </Form.Item>
      <Form.Item
        label="Active"
        name="isActive"
        tooltip="Only one banner info can be selected, If you make activated this banner, other active banner info will be deactivated automatically!"
      >
        <Switch />
      </Form.Item>
    </Form>
  );
};

export default memo(BannerForm);
