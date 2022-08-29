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
  if (isError) {
    return <InfoSpan error>Error: {error?.message}</InfoSpan>;
  }

  return (
    <>
      {isLoading && <InfoSpan info>Loading...</InfoSpan>}
      {!hasData && !isLoading && <InfoSpan info>Ooops.... No Data!</InfoSpan>}
      {children}
    </>
  );
}
