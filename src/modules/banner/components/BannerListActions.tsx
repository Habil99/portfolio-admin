import { Button } from "antd";
import { Banner } from "../types/index.type";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useModal, useNotification } from "context";
import {
  useDeleteBannerMutation,
} from "modules/banner/services/banner.service";
import { useAppDispatch } from "store";
import { modalActions } from "store/modal/modal.slice";
import { ModalTypes } from "store/modal/modal.types";
import EditBannerModal from "modules/banner/components/modal/EditBannerModal";

interface BannerListActionsProps {
  data: Banner;
}

const BannerListActions = ({ data }: BannerListActionsProps) => {
  const dispatch = useAppDispatch();
  const modal = useModal();
  const [deleteBanner] = useDeleteBannerMutation();
  const { notifySuccess, notifyError } = useNotification();

  const handleDelete = () => {
    modal.confirm({
      title: "Are you sure you want to delete this banner?",
      onOk: async () => {
        await deleteBanner(data.id).unwrap().then(() => {
          notifySuccess("Banner deleted successfully!");
        }).catch((error) => {
          notifyError(error.message);
        });
      },
    });
  };

  const toggleBannerEditModal = () => {
    dispatch(modalActions.toggle({
      modal: ModalTypes.EDIT_BANNER,
      modalProps: { data },
    }));
  };

  return (
    <>
      <div className="flex gap-2 justify-end">
        <Button type="primary" icon={<EditFilled />}
                onClick={toggleBannerEditModal}>
          Edit
        </Button>
        <Button className="bg-primary-error" icon={<DeleteFilled />}
                onClick={handleDelete}>
          Delete
        </Button>
      </div>
      <EditBannerModal
        toggle={toggleBannerEditModal}
      />
    </>
  );
};

export default BannerListActions;
