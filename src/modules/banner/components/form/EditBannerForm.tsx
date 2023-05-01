import { FormInstance } from "antd";
import { useEffect } from "react";
import { Banner } from "modules/banner/types/index.type";
import BannerForm from "modules/banner/components/form/BannerForm";
import { useSelector } from "react-redux";
import { modalSelector } from "store/modal/modal.slice";
import { RootState } from "store";
import useBannerEdit from "modules/banner/hooks/useBannerEdit";

interface EditBannerFormProps {
  form: FormInstance<Banner>;
}

const EditBannerForm = ({ form }: EditBannerFormProps) => {
  const modalState = useSelector((state: RootState) => modalSelector(state).editBanner);
  const { updateBanner } = useBannerEdit(modalState.modalProps?.data.id);

  useEffect(() => {
    if (modalState.modalProps) {
      form.setFieldsValue(modalState.modalProps.data);
    }
  }, [modalState.modalProps]);

  return (
    <BannerForm handleSubmit={updateBanner} form={form} />
  );
};

export default EditBannerForm;
