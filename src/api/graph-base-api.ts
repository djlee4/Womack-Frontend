import { GraphQLClient } from "graphql-request";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

export const client = new GraphQLClient("http://localhost:5000/graphql");

export const graphqlBaseApi = createApi({
  reducerPath: "graphqlApi",
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
});

export { graphqlBaseApi as api };
