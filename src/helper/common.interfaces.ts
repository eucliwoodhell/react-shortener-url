export enum CommonApiStatus {
  INITIAL = "INITIAL",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export enum TypeOperation {
  ADD = "add",
  DEL = "delete",
  UPD = "update",
  GET = "get",
}

export const messageError = (response: any) => {
  return Object.keys(response)
    .flatMap((key) => {
      return response[key].map((item: { message: string }) => item.message);
    })
    .join(", ");
};
