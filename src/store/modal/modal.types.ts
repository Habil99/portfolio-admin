interface ModalState {
  isOpen: boolean;
  modalProps?: any;
}

export enum ModalTypes {
  CREATE_BANNER = "createBanner",
  EDIT_BANNER = "editBanner",
  CREATE_ABOUT = "createAbout",
  EDIT_ABOUT = "editAbout",
}

export interface ModalPayload {
  modal: ModalTypes;
  isOpen?: boolean;
  modalProps?: any;
}

export type ModalInitialState = {
  [key in ModalTypes]: ModalState;
};
