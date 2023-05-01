import { Form, Modal } from "antd";
import { modalSelector } from "store/modal/modal.slice";
import { useSelector } from "react-redux";
import { RootState } from "store";
import EditBannerForm from "modules/banner/components/form/EditBannerForm";

interface EditBannerModalProps {
  toggle: () => void;
}

const EditBannerModal = ({ toggle }: EditBannerModalProps) => {
  const modalState = useSelector((state: RootState) => modalSelector(state).editBanner);
  const [form] = Form.useForm();

  return (
    <Modal
      title="Edit Banner Info"
      okText="Update"
      open={modalState.isOpen}
      onOk={form.submit}
      onCancel={toggle}
      width={720}
    >
      <div className="my-4">
        <EditBannerForm form={form} />
      </div>
    </Modal>
  );
};

export default EditBannerModal;
