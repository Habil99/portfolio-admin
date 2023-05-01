import { FormInstance } from "antd";
import AboutForm from "./AboutForm";
import useAboutCreate from "../../hooks/useAboutCreate";
import { About } from "../../types/index.type";

interface CreateAboutFormProps {
  form: FormInstance<About>;
}

const CreateAboutForm = ({ form }: CreateAboutFormProps) => {
  const { createAbout } = useAboutCreate(form);

  return (
    <AboutForm handleSubmit={createAbout} form={form} />
  );
};

export default CreateAboutForm;
