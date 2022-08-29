import { InfoSpan } from "components/UiKit";
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
    return <InfoSpan info>Loading...</InfoSpan>;
  }

  if (isError) {
    return <InfoSpan error>Error: {error?.message}</InfoSpan>;
  }

  if (!hasData) {
    return <InfoSpan info>Ooops.... No Data!</InfoSpan>;
  }

  return <>{children}</>;
}
