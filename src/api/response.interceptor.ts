import { AxiosError } from "axios";
import { isServerErrorsResponse, isSuccessfulResponse } from "./checkResponseStatus";

class FetchError extends Error {
  constructor(public res?: Response, message?: string) {
    super(message);
  }
}

export function responseInterceptors(response: any) {
  const responseStatus = response?.status || 200;
  const responseStatusText = response?.status || "Ok";

  if (isSuccessfulResponse(responseStatus)) {
    return response;
  } else {
    throw new FetchError(responseStatus, responseStatusText);
  }
}

export function responseError(error: AxiosError<any, any>) {
  const responseStatus = error.response?.status || 400;
  const errorMsg: string = `${responseStatus} - ${(isServerErrorsResponse(responseStatus) ? "Server" : "") + "Error"}`;
  throw new Error(errorMsg);
}
