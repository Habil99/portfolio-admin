import {
  useCreateBannerMutation,
} from "modules/banner/services/banner.service";
import { useNotification } from "context";
import { useCallback } from "react";
import { Banner } from "modules/banner/types/index.type";
import { useAppDispatch } from "store";
import { modalActions } from "store/modal/modal.slice";
import { ModalTypes } from "store/modal/modal.types";

const useBannerCreate = () => {
  const dispatch = useAppDispatch();
  const [createBanner] = useCreateBannerMutation();
  const { notifySuccess, notifyError } = useNotification();

  const handleSubmit = useCallback(async (values: Banner) => {
    await createBanner(values)
      .unwrap()
      .then(() => {
        notifySuccess("Banner info created successfully!");
        dispatch(modalActions.toggle({
          modal: ModalTypes.CREATE_BANNER,
        }));
      }).catch((error: any) => {
        notifyError(error.message);
      });
  }, []);

  return {
    createBanner: handleSubmit,
  };
};

export default useBannerCreate;
