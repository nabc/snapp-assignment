export function requestInterceptors(request: any) {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return request;
}

export function requestError(error: any) {
  return Promise.reject(error);
}
