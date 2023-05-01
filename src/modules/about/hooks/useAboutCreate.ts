import { useNotification } from "context";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "store";
import { modalActions } from "store/modal/modal.slice";
import { ModalTypes } from "store/modal/modal.types";
import { useCreateAboutMutation } from "../services/about.service";
import { About } from "../types/index.type";
import { FormInstance } from "antd";

const useAboutCreate = (form: FormInstance<About>) => {
  const dispatch = useAppDispatch();
  const [createAbout, { isLoading }] = useCreateAboutMutation();
  const { notifySuccess, notifyError } = useNotification();

  const handleSubmit = useCallback(async (values: About) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    values.skills.forEach((skill: string) => {
      formData.append("skills", skill);
    });
    formData.append("photo", values.photo.file);

    await createAbout(formData)
      .unwrap()
      .then(() => {
        notifySuccess("About info created successfully!");
        dispatch(modalActions.toggle({
          modal: ModalTypes.CREATE_ABOUT,
        }));
        form.resetFields();
      }).catch((error: any) => {
        notifyError(error.message);
      });
  }, []);

  useEffect(() => {
    dispatch(modalActions.setModalProps({
      modal: ModalTypes.CREATE_ABOUT,
      modalProps: {
        loading: isLoading,
      },
    }));
  }, [isLoading])

  return {
    createAbout: handleSubmit,
  };
};

export default useAboutCreate;
