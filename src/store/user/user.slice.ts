import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { AuthResponse, UserInitialState } from "./user.types";

const userState: UserInitialState = {
  data: null,
  isAuthenticated: !!localStorage.getItem("accessToken"),
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    setUser: (state: UserInitialState, action: PayloadAction<AuthResponse>) => {
      state.data = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    resetUser: (state: UserInitialState) => {
      state.data = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const userActions = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
