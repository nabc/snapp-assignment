/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useParams } from "contexts/ParamsContext";

export default function useParamParser() {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    state: { skip, limit, where, sortBy, sortOrder },
  } = useParams();

  const addOrRemoveStringParams = (key: string, value: string, removalCondition: boolean) => {
    if (removalCondition) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
  };

  useEffect(() => {
    searchParams.set("limit", limit.toString());
    searchParams.set("skip", skip.toString());
    addOrRemoveStringParams("where", where, where === "");
    addOrRemoveStringParams("sort", sortBy + " " + sortOrder, sortBy === "");

    // console.log(searchParams.toString());

    setSearchParams(searchParams);
  }, [skip, limit, where, sortBy, sortOrder]);

  return {
    searchParams,
  };
}
