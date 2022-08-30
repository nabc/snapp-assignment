/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterQueryType } from "types";

export default function useParamParser() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [skipped, setSkipped] = useState<number>(parseInt(searchParams.get("skip") || "0"));
  const [limit, setLimit] = useState<number>(parseInt(searchParams.get("limit") || "12"));
  // /passenger/?where={"first_name":{"contains":"Ab"},"last_name":{"contains":"a"}}&sort=createdAt DESC&limit=30

  const updateSearchParams = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  const updateFilter = (filterObject: FilterQueryType) => {
    setSkipped(12);
    setLimit(0);
    searchParams.set("limit", "12");
    searchParams.set("skip", "0");
    searchParams.set("where", JSON.stringify(filterObject));
    setSearchParams(searchParams);
  };

  const updateSort = (sort: string) => {
    updateSearchParams("sort", sort);
  };

  const updatePageParameters = (limit: number, skip: number) => {
    searchParams.set("limit", limit.toString());
    searchParams.set("skip", skip.toString());
    setSkipped(skip);
    setLimit(limit);
    setSearchParams(searchParams);
  };

  const removeKeyFromParams = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (searchParams.toString() === "") {
      updatePageParameters(12, 0);
    }
  }, [searchParams]);

  return {
    searchParams,
    skipped,
    limit,
    setSkipped,
    setLimit,
    updateFilter,
    updateSort,
    updatePageParameters,
    removeKeyFromParams,
  };
}
