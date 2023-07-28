import { useSelector } from "react-redux";
import { RootState } from "..";
import useActionDispatcher from "../../hook/useActionDispacher";
import { LinkItem } from "./interface";
import { deleteLink, fetchLink, submitLink } from "./link.api";

export interface Hook extends LinkItem {
  linkFetchResult: () => void;
  linkSubmit: (payload: string) => void;
  linkDelete: (payload: number) => void;
}

export const useLinkState = (): Hook => {
  const { voidAction, valueAction } = useActionDispatcher();
  const { link, items, error, status, api_get, api_post, api_delete, type } =
    useSelector((state: RootState) => state.linkMaintained);

  return {
    link,
    items,
    error,
    status,
    api_get,
    api_post,
    api_delete,
    type,
    linkFetchResult: voidAction(fetchLink),
    linkSubmit: valueAction(submitLink),
    linkDelete: valueAction(deleteLink),
  };
};
