import { axiosBaseQuery } from "lib/axios";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RegisterValues } from "../types/register.type";
import { LoginValues } from "../types/login.type";
import { UserResponse } from "../types/response.type";
import { BaseResponseType } from "types";

// @ts-ignore
// @ts-ignore
export const authService = createApi({
  reducerPath: "auth",
  // use axios as base query
  baseQuery: axiosBaseQuery(),
  // define endpoints
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ email, password }: LoginValues) => ({
        url: "/auth/login",
        method: "POST",
        data: {
          email, password,
        },
      }),
    }),
    register: builder.mutation({
      query: ({ username, email, password }: RegisterValues) => ({
        url: "/auth/register",
        method: "POST",
        data: {
          username, email, password,
        },
      }),
    }),
    getUser: builder.query<BaseResponseType<UserResponse>, void>({
      query: () => "/auth/me",
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
} = authService;

export const useGetUserSelector = authService.endpoints.getUser.select();

// how to use ? selector in component ? -> const
