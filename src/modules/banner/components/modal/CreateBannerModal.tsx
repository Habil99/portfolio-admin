import { Form, Modal } from "antd";
import { modalSelector } from "store/modal/modal.slice";
import { useSelector } from "react-redux";
import { RootState } from "store";
import CreateBannerForm from "modules/banner/components/form/CreateBannerForm";

interface CreateBannerModalProps {
  toggle: () => void;
}

const CreateBannerModal = ({ toggle }: CreateBannerModalProps) => {
  const modalState = useSelector((state: RootState) => modalSelector(state).createBanner);
  const [form] = Form.useForm();

  return (
    <Modal
      title="Create Banner Info"
      okText="Submit"
      open={modalState.isOpen}
      onOk={form.submit}
      onCancel={toggle}
      width={720}
    >
      <div className="my-4">
        <CreateBannerForm form={form} />
      </div>
    </Modal>
  );
};

export default CreateBannerModal;
