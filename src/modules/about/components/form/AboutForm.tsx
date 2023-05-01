import { memo, useCallback, useState } from "react";
import { Button, Form, FormInstance, Input, Select, Upload } from "antd";
import { About } from "../../types/index.type";
import { CREATE_ABOUT_FORM_RULES } from "../../constants";
import { UploadOutlined } from "@ant-design/icons";
import { useGetSkillsQuery } from "../../services/skill.service";
import { debounce } from "../../../../lib";

interface AboutFormProps {
  handleSubmit: (values: About) => Promise<void>;
  form: FormInstance<About>;
}

const AboutForm = ({
                     handleSubmit,
                     form,
                   }: AboutFormProps) => {
  const [skillQuery, setSkillQuery] = useState<string>("");

  const { data, isLoading } = useGetSkillsQuery(skillQuery, {
    skip: !skillQuery,
  });

  const updateSkillQuery = useCallback(debounce((value: string) => {
    setSkillQuery(value);
  }, 500), []);

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      name="create-about"
      layout="vertical"
      className="g-form-grid"
    >
      <Form.Item
        name="title"
        label="Title"
        rules={CREATE_ABOUT_FORM_RULES.title}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="photo"
        label="Photo"
        rules={CREATE_ABOUT_FORM_RULES.photo}
      >
        <Upload
          name="photo"
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
        >
          <Button type="dashed" icon={<UploadOutlined />}>Click to
            Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="skills"
        label="Skills"
        rules={CREATE_ABOUT_FORM_RULES.skills}
        style={{
          gridColumn: "span 2",
        }}
      >
        <Select
          mode="tags"
          placeholder="Skills"
          options={data}
          loading={isLoading}
          onSearch={updateSkillQuery}
        />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={CREATE_ABOUT_FORM_RULES.description}
        style={{
          gridColumn: "span 2",
        }}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

export default memo(AboutForm);
