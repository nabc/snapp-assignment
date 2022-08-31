export enum ActionTypes {
  UpdateSkip = "[Params] UpdateSkip",
  UpdateLimit = "[Params] UpdateLimit",
  UpdateFilter = "[Params] UpdateFilter",
  UpdateSort = "[Params] UpdateSort",
}

export interface UpdateSkip {
  type: ActionTypes.UpdateSkip;
  skip: number;
}

export interface UpdateLimit {
  type: ActionTypes.UpdateLimit;
  limit: number;
}

export interface UpdateFilter {
  type: ActionTypes.UpdateFilter;
  where: string;
}
export interface UpdateSort {
  type: ActionTypes.UpdateSort;
  sortBy: string;
  sortOrder: string;
}

export type ParamsActions = UpdateSkip | UpdateLimit | UpdateFilter | UpdateSort;

export function updateSkip(skip: number): ParamsActions {
  return {
    type: ActionTypes.UpdateSkip,
    skip,
  };
}
export function updateLimit(limit: number): ParamsActions {
  return {
    type: ActionTypes.UpdateLimit,
    limit,
  };
}

export function updateFilter(where: string): ParamsActions {
  return {
    type: ActionTypes.UpdateFilter,
    where,
  };
}

export function updateSort(sortBy: string, sortOrder: string): ParamsActions {
  return {
    type: ActionTypes.UpdateSort,
    sortBy,
    sortOrder,
  };
}
