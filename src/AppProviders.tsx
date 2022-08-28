import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "store";
import GlobalStyle from "styles/global";

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
