import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geogrpahy", "Sales", "Admins", "Performance", "Dashboard"],
  endpoints: (build) => ({
    getUser: build.query({
        query: (id) => `general/user/${id}`,
        providesTags: ["User"]
    }),
    getProducts: build.query({
      query: () => "client/products",
      provideTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      provideTags: ["Customers"]
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search}) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search},
      }),
      provideTags: ["Transactions"]
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      provideTags: ["Sales"]
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      provideTags: ["Admins"]
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      provideTags: ["Performance"]
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"]
    })
  }),
});

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery,
    useGetUserPerformanceQuery,
    useGetDashboardQuery,
} = api;
