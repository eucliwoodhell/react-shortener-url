import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import getAxios from "../../config/api.connect";
import { CommonApiStatus, messageError } from "../../helper/common.interfaces";
import { Link, LinkDelete, LinkGet, LinkPost } from "./interface";

export const fetchLink = createAsyncThunk(
  "home/getLink",
  async (): Promise<LinkGet> => {
    const response = await getAxios.instance().get("/link");

    const items: Link[] = (response.data as Link[]).map((item) => ({
      id: item.id,
      url: item.url,
      short_url: item.short_url,
    }));

    return { items: items, status: CommonApiStatus.SUCCESS } as LinkGet;
  }
);

export const submitLink = createAsyncThunk(
  "home/submitLink",
  async (link: string): Promise<LinkPost> => {
    try {
      const response = await getAxios.instance().post("/link", { url: link });
      return {
        item: response.data,
        status: CommonApiStatus.SUCCESS,
        error: "",
      } as LinkPost;
    } catch (error: any) {
      return {
        item: undefined,
        status: CommonApiStatus.ERROR,
        error: messageError(error.response.data),
      } as LinkPost;
    }
  }
);

export const deleteLink = createAsyncThunk(
  "home/deleteLink",
  async (id: number): Promise<LinkDelete> => {
    const response = await getAxios.instance().delete(`/link/${id}`);
    return {
      id: id,
      status: CommonApiStatus.SUCCESS,
      deleted: response.data.deleted,
      message: response.data.message,
    } as LinkDelete;
  }
);

export const linkRedirect = createApi({
  reducerPath: "link/redirect",
  baseQuery: getAxios.axiosBaseQuery(),
  endpoints: (builder) => ({
    getRedirect: builder.query({
      query: (short_url: string) => ({
        url: `/link/${short_url}`,
        method: "GET",
      }),
      transformResponse: (response: Link) => response,
    }),
  }),
});

export const { useGetRedirectQuery } = linkRedirect;
