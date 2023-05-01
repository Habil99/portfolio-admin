import { FormInstance } from "antd";
import { Banner } from "modules/banner/types/index.type";
import BannerForm from "modules/banner/components/form/BannerForm";
import useBannerCreate from "modules/banner/hooks/useBannerCreate";

interface CreateBannerFormProps {
  form: FormInstance<Banner>;
}

const CreateBannerForm = ({ form }: CreateBannerFormProps) => {
  const { createBanner } = useBannerCreate();
  return (
    <BannerForm handleSubmit={createBanner} form={form} />
  );
};

export default CreateBannerForm;
