import { createContext, useReducer, Dispatch, PropsWithChildren, useContext } from "react";
import { useSearchParams } from "react-router-dom";

import * as fromParamsActions from "./actions";
import { ParamsReducer, ParamsReducerState } from "./reducer";

const ContextInitialState: ParamsReducerState = {
  skip: 0,
  limit: 12,
  where: "",
  sortBy: "",
  sortOrder: "ASC",
};

const ParamsContext = createContext<{
  state: ParamsReducerState;
  dispatch: Dispatch<fromParamsActions.ParamsActions>;
}>({
  state: ContextInitialState,
  dispatch: () => null,
});

ParamsContext.displayName = "ParamsContext";

export interface ParamsProviderProps {}

function ParamsProvider({ children }: PropsWithChildren<ParamsProviderProps>) {
  const [searchParams] = useSearchParams();

  const [sortBy, sortOrder] = (searchParams.get("sortBy") || " ").split(" ");

  const initialState = {
    skip: parseInt(searchParams.get("skip") || "0"),
    limit: parseInt(searchParams.get("limit") || "12"),
    where: searchParams.get("where") || "",
    sortBy: sortBy,
    sortOrder: sortOrder || "ASC",
  };

  const [state, dispatch] = useReducer(ParamsReducer, initialState);

  return <ParamsContext.Provider value={{ state, dispatch }}>{children}</ParamsContext.Provider>;
}

function useParams() {
  const context = useContext(ParamsContext);

  if (context === undefined) {
    throw new Error("useParams must be used within a ParamsProvider");
  }
  return context;
}

export { ParamsProvider, useParams, fromParamsActions };
