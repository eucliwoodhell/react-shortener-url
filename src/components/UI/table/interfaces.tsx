import { Alignment } from "../../../assets";
import { CommonApiStatus } from "../../../helper/common.interfaces";

export interface Props {
  title?: string;
  data: any[];
  columns: Column[];
  pageSize: number;
  showColumnsButton: boolean;
  status: CommonApiStatus;
  error: string;
  callHover?: (item: any) => void;
  callEdit?: (item: any) => void;
  callDelete?: (id: number) => void;
}

export interface Column {
  name: string;
  label: string;
  fontSize?: string;
  align?: Alignment;
  width?: string;
}
