/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterQueryType } from "types";

export default function useParamParser() {
  const [searchParams, setSearchParams] = useSearchParams();

  // /passenger/?where={"first_name":{"contains":"Ab"},"last_name":{"contains":"a"}}&sort=createdAt DESC&limit=30

  const updateSearchParams = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams, { replace: true });
  };

  const updateFilter = (filterObject: FilterQueryType) => {
    updateSearchParams("where", JSON.stringify(filterObject));
  };

  const updateSort = (sort: string) => {
    updateSearchParams("sort", sort);
  };

  const updatePageParameters = useCallback((limit: number, skip: number) => {
    searchParams.set("limit", limit.toString());
    searchParams.set("skip", skip.toString());
    setSearchParams(searchParams);
  }, []);

  const removeKeyFromParams = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams, { replace: true });
  };

  return { updateFilter, updateSort, updatePageParameters, removeKeyFromParams };
}
