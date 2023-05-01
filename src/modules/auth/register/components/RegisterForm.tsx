import { Button, Form, Input } from "antd";
import { LOGIN_FORM_RULES } from "../../constants";
import useRegister from "../hooks/useRegister";

const RegisterForm = () => {
  const { onFinish, onFinishFailed, isLoading } = useRegister();

  return (

    <Form
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={LOGIN_FORM_RULES.username}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={LOGIN_FORM_RULES.email}
      >
        <Input />
      </Form.Item>
      <Form.Item
        className="my-6" label="Password" name="password"
        rules={LOGIN_FORM_RULES.password}
      >
        <Input.Password />
      </Form.Item>
      <Button className="w-full mt-2" type="primary" htmlType="submit" loading={isLoading}>
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
