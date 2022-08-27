import { PropsWithChildren } from "react";

interface ApiStateHandlerProps {
  isLoading: boolean;
  isError: boolean;
  hasData: boolean;
  error: { message: string } | null;
}
export default function ApiStateHandler({
  isLoading,
  isError,
  hasData,
  error,
  children,
}: PropsWithChildren<ApiStateHandlerProps>) {
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  if (!hasData) {
    return <span>Ooops.... No Data!</span>;
  }

  return <>{children}</>;
}
