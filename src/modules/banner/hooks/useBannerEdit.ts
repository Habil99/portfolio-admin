import {
  useUpdateBannerMutation,
} from "modules/banner/services/banner.service";
import { useAppDispatch } from "store";
import { modalActions } from "store/modal/modal.slice";
import { useNotification } from "context";
import { useCallback } from "react";
import { Banner } from "modules/banner/types/index.type";
import { ModalTypes } from "store/modal/modal.types";

const useBannerEdit = (id: number) => {
  const dispatch = useAppDispatch();
  const [updateBanner] = useUpdateBannerMutation();
  const { notifySuccess, notifyError } = useNotification();

  const handleSubmit = useCallback(async (values: Omit<Banner, "id">) => {
    await updateBanner({
      id,
      ...values,
    })
      .unwrap()
      .then(() => {
        notifySuccess("Banner info updated successfully!");
        dispatch(modalActions.toggle({
          modal: ModalTypes.EDIT_BANNER,
          // modalProps: { data: null },
        }));
      }).catch((error) => {
        notifyError(error.message);
      });
  }, []);

  return {
    updateBanner: handleSubmit,
  };
};

export default useBannerEdit;
