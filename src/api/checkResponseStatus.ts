function statusCodeIsValid(statusCode: any): boolean {
  return typeof statusCode === "number" && String(statusCode).length === 3;
}

export function isSuccessfulResponse(statusCode: number): boolean {
  if (statusCodeIsValid(statusCode)) {
    return statusCode >= 200 && statusCode <= 299;
  }
  return false;
}

export function isRedirectsResponse(statusCode: number): boolean {
  if (statusCodeIsValid(statusCode)) {
    return statusCode >= 300 && statusCode <= 399;
  }
  return false;
}

export function isClientErrorsResponse(statusCode: number): boolean {
  if (statusCodeIsValid(statusCode)) {
    return statusCode >= 400 && statusCode <= 499;
  }
  return false;
}

export function isServerErrorsResponse(statusCode: number): boolean {
  if (statusCodeIsValid(statusCode)) {
    return statusCode >= 500 && statusCode <= 599;
  }
  return false;
}
