/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { fromParamsActions, useParams } from "contexts/ParamsContext";

export default function usePagination(total: number) {
  const {
    state: { limit, skip },
    dispatch,
  } = useParams();

  const changeSkip = (newSkip: number) => {
    dispatch(fromParamsActions.updateSkip(newSkip));
  };

  const [page, setPage] = useState(skip > 0 ? Math.ceil(skip / limit) : 1);
  const [totalPages, setTotalPages] = useState(Math.ceil(total / limit));

  const generatePageNumbers = (mode?: string) => {
    if (totalPages < 6) {
      // create an array with the length of total pages if total pages are less than 5
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if ([1, 2, 3].includes(page) || mode === "init") {
      // create an array with the range of 1 to 5 because these page numbers could not be at center as it would result to pages with a minus page number
      return [1, 2, 3, 4, 5];
    }
    if (page > totalPages - 3) {
      // create an array with the range of `totalPages-4` to `totalPages` because these page numbers could not be at center as it would result to pages with a page number higher than total page numbers
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    // create an array with the range of `page-2` to `page+2`  to keep the current page at the center
    return [page - 2, page - 1, page, page + 1, page + 2];
  };

  const [pageNumbers, setPageNumbers] = useState(() => {
    const initialState = generatePageNumbers("init");
    return initialState;
  });

  useEffect(() => {
    setPageNumbers(generatePageNumbers());
  }, [page, totalPages]);

  useEffect(() => {
    setPage(Math.floor((skip + limit) / limit));
    setTotalPages(Math.ceil(total / limit));
  }, [skip, limit, total]);

  return { skip, limit, page, totalPages, pageNumbers, changeSkip };
}
