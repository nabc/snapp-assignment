import { PropsWithChildren } from "react";

import { InfoSpan } from "components/UiKit";

import LoaderSpinner from "./LoaderSpinner";

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
  if (isError) {
    return <InfoSpan mode="error">Error: {error?.message}</InfoSpan>;
  }

  return (
    <div className="relative">
      {isLoading && <LoaderSpinner />}
      {!hasData && !isLoading && <InfoSpan mode="info">Ooops.... No Data!</InfoSpan>}
      {children}
    </div>
  );
}
