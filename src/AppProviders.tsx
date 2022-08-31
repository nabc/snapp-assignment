import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyle from "styles/global";
import store from "store";

const queryClient = new QueryClient();

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
