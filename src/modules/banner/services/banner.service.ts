import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "lib";
import { BaseResponseType } from "types";
import { Banner } from "../types/index.type";

export const bannerService = createApi({
  reducerPath: "banner",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Banner"], // This is the tag type, which is used to identify the query
  endpoints: (builder) => ({
    findAll: builder.query<BaseResponseType<Banner[]>, void>({
      query: () => "/banner",
      providesTags: ["Banner"],
    }),
    create: builder.mutation<BaseResponseType<Banner>, Banner>({
      query: (data) => ({
        url: "/banner",
        method: "POST",
        data: {
          ...data,
          ...data.isActive === undefined && { isActive: false },
        },
      }),
      invalidatesTags: ["Banner"], // This is the tag type, which is used to identify the query
    }),
    delete: builder.mutation<BaseResponseType<null>, number>({
      query: (id) => ({
        url: `/banner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Banner"], // This is the tag type, which is used to identify the query
    }),
    update: builder.mutation<BaseResponseType<Banner>, Banner>({
      query: (data) => ({
        url: `/banner/${data.id}`,
        method: "PUT",
        data: {
          ...data,
          ...data.isActive === undefined && { isActive: false },
        },
      }),
      invalidatesTags: ["Banner"], // This is the tag type, which is used to identify the query
    }),
  }),
});

export const {
  useFindAllQuery: useGetBannerListQuery,
  useCreateMutation: useCreateBannerMutation,
  useDeleteMutation: useDeleteBannerMutation,
  useUpdateMutation: useUpdateBannerMutation,
} = bannerService;
