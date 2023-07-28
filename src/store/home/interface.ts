import { CommonApiStatus, TypeOperation } from "../../helper/common.interfaces";

export interface Link {
  id: number;
  url: string;
  short_url: string;
}

export interface LinkRequest {
  link: string;
}

export interface LinkItem {
  link: Link | null;
  items: Link[];
  status: CommonApiStatus;
  api_get: LinkGet | undefined;
  api_post: LinkPost | undefined;
  api_delete: LinkDelete | undefined;
  type: TypeOperation | undefined;
  error: string;
}

export interface LinkGet {
  items: Link[];
  status: CommonApiStatus;
  error: string;
}

export interface LinkPost {
  item: Link | undefined;
  status: CommonApiStatus;
  error: string;
}

export interface LinkDelete {
  id: number;
  status: CommonApiStatus;
  message: string;
  deleted: number;
}
