import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const example = createApi({
  reducerPath: "exampleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: (headers) => {
      const token = "TuF3xmX1B0H462DNNB27hrGsSm7s4dK9";
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Example"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "",
      providesTags: [{ type: "Example", id: "LIST" }],
    }),
  }),
});

export const { useGetAllProductsQuery } = example;
