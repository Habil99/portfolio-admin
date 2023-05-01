import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "./user.slice";

export default {
  logout: createAsyncThunk("user/logout", async (payload, { dispatch }) => {
    dispatch(userActions.resetUser());
  }),
};
