import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Option } from "../../../types/option.type";

export const skillService = createApi({
  reducerPath: "skill",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.apilayer.com",
    headers: {
      "apiKey": "PrUTswh6zH3ahJ31nQg83WP7MgSRSOMq",
    },
  }),
  endpoints: (builder) => ({
    getSkills: builder.query<Option[], string>({
      query: (query) => ({
        redirect: "follow",
        url: "/skills",
        method: "GET",
        params: {
          q: query,
        },
      }),
      transformResponse: (response: string[]) => response.map((skill: string) => ({
        label: skill,
        value: skill,
      })),
    }),
  }),
});

export const { useGetSkillsQuery } = skillService;
