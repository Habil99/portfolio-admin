import { Form, Modal } from "antd";
import { modalSelector } from "store/modal/modal.slice";
import { useSelector } from "react-redux";
import { RootState } from "store";
import CreateBannerForm from "modules/banner/components/form/CreateBannerForm";
import CreateAboutForm from "../form/CreateAboutForm";

interface CreateAboutModalProps {
  toggle: () => void;
}

const CreateAboutModal = ({ toggle }: CreateAboutModalProps) => {
  const modalState = useSelector((state: RootState) => modalSelector(state).createAbout);
  const [form] = Form.useForm();

  return (
    <Modal
      title="Create About Info"
      okText="Submit"
      open={modalState.isOpen}
      onOk={form.submit}
      onCancel={toggle}
      okButtonProps={{
        loading: modalState.modalProps?.loading,
        disabled: modalState.modalProps?.loading,
      }}
      cancelButtonProps={{
        disabled: modalState.modalProps?.loading,
      }}
      width={720}
    >
      <div className="my-4">
        <CreateAboutForm form={form} />
      </div>
    </Modal>
  );
};

export default CreateAboutModal;
