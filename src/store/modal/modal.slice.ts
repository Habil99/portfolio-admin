import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalInitialState, ModalPayload } from "./modal.types";
import { RootState } from "store/index";

const modalState: ModalInitialState = {
  createBanner: {
    isOpen: false,
  },
  editBanner: {
    isOpen: false,
  },
  createAbout: {
    isOpen: false,
  },
  editAbout: {
    isOpen: false,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalState,
  reducers: {
    toggle: (state: ModalInitialState, action: PayloadAction<Omit<ModalPayload, "isOpen">>) => {
      const { modal, modalProps } = action.payload;
      state[modal].isOpen = !state[modal].isOpen;

      if (modalProps) {
        state[modal].modalProps = modalProps;
      }
    },
    setModalProps: (state: ModalInitialState, action: PayloadAction<ModalPayload>) => {
      const { modal, modalProps } = action.payload;
      state[modal].modalProps = modalProps;
    },
  },
});

export const modalActions = modalSlice.actions;

export const modalSelector = (state: RootState) => state.modal;

export default modalSlice.reducer;
