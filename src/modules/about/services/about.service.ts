import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "lib";
import { About } from "../types/index.type";

export const aboutService = createApi({
  reducerPath: "about",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["About"],
  endpoints: (builder) => ({
    getAbout: builder.query<About[], void>({
      query: () => "/about",
      transformResponse: (response: any) => response.data,
      providesTags: ["About"],
    }),
    createAbout: builder.mutation<About, FormData>({
      query: (data) => ({
        url: "/about",
        method: "POST",
        data,
      }),
      invalidatesTags: ["About"],
    }),
  }),
});

export const { useGetAboutQuery, useCreateAboutMutation } = aboutService;
