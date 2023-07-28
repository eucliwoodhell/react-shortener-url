import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommonApiStatus, TypeOperation } from "../../helper/common.interfaces";
import { LinkDelete, LinkGet, LinkItem, LinkPost } from "./interface";
import { deleteLink, fetchLink, submitLink } from "./link.api";

const initialState: LinkItem = {
  link: null,
  items: [],
  error: "",
  status: CommonApiStatus.INITIAL,
  api_get: undefined,
  api_post: undefined,
  api_delete: undefined,
  type: undefined,
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLink.pending, (state: LinkItem) => {
      state.status = CommonApiStatus.LOADING;
      state.type = TypeOperation.GET;
    });
    builder.addCase(
      fetchLink.fulfilled,
      (state: LinkItem, action: PayloadAction<LinkGet>) => {
        state.status = action.payload.status;
        state.error = "";
        state.items = action.payload.items.map((item) => {
          return { ...item, short_url: `https://me.li/${item.short_url}` };
        });
      }
    );
    builder.addCase(fetchLink.rejected, (state: LinkItem) => {
      state.status = CommonApiStatus.ERROR;
      state.error = "Error getting link";
      state.items = [];
    });
    builder.addCase(deleteLink.pending, (state: LinkItem) => {
      state.type = TypeOperation.DEL;
    });
    builder.addCase(
      deleteLink.fulfilled,
      (state: LinkItem, action: PayloadAction<LinkDelete>) => {
        state.api_delete = action.payload;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    );
    builder.addCase(deleteLink.rejected, (state: LinkItem) => {
      state.api_delete = {
        deleted: 0,
        id: 0,
        message: "Error deleting link",
        status: CommonApiStatus.ERROR,
      } as LinkDelete;
    });
    builder.addCase(submitLink.pending, (state: LinkItem) => {
      state.type = TypeOperation.ADD;
    });
    builder.addCase(
      submitLink.fulfilled,
      (state: LinkItem, action: PayloadAction<LinkPost>) => {
        state.api_post = action.payload;
        if (action.payload.item) {
          state.items = [...state.items, action.payload.item];
        }
      }
    );
    builder.addCase(submitLink.rejected, (state: LinkItem) => {
      state.api_post = {
        error: "Error submitting link",
        item: undefined,
        status: CommonApiStatus.ERROR,
      } as LinkPost;
    });
  },
});

export const { setError } = linkSlice.actions;
export default linkSlice.reducer;
