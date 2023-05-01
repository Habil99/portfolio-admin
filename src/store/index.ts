import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import modalReducer from "./modal/modal.slice";
import { useDispatch } from "react-redux";
import { authService } from "modules/auth/services/auth.service";
import { bannerService } from "modules/banner/services/banner.service";
import { aboutService, skillService } from "../modules/about";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    [authService.reducerPath]: authService.reducer,
    [bannerService.reducerPath]: bannerService.reducer,
    [aboutService.reducerPath]: aboutService.reducer,
    [skillService.reducerPath]: skillService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware, bannerService.middleware, aboutService.middleware, skillService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
