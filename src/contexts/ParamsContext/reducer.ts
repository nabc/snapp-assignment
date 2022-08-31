import * as fromActions from "./actions";

export interface ParamsReducerState {
  skip: number;
  limit: number;
  where: string;
  sortBy: string;
  sortOrder: string;
}

export function ParamsReducer(state: ParamsReducerState, action: fromActions.ParamsActions): ParamsReducerState {
  switch (action.type) {
    case fromActions.ActionTypes.UpdateSkip: {
      return {
        ...state,
        skip: action.skip,
      };
    }
    case fromActions.ActionTypes.UpdateLimit: {
      return {
        ...state,
        limit: action.limit,
      };
    }
    case fromActions.ActionTypes.UpdateFilter: {
      return {
        ...state,
        where: action.where,
        skip: 0,
      };
    }
    case fromActions.ActionTypes.UpdateSort: {
      return {
        ...state,
        sortBy: action.sortBy,
        sortOrder: action.sortOrder,
      };
    }
    default:
      return state;
  }
}
