/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useParamParser from "hooks/useParamParser";

export default function usePagination(total: number) {
  const { skipped, limit, setSkipped, updatePageParameters } = useParamParser();

  const [page, setPage] = useState(skipped > 0 ? Math.ceil(skipped / limit) : 1);
  const [totalPages, setTotalPages] = useState(Math.ceil(total / limit));

  // create array with the length of pages if total page are less than 5, or create a range of 1 to N where N is the last page number

  const generatePageNumbers = (mode?: string) => {
    if (totalPages < 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if ([1, 2, 3].includes(page) || mode === "init") {
      return [1, 2, 3, 4, 5];
    }
    if (page > totalPages - 3) {
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [page - 2, page - 1, page, page + 1, page + 2];
  };

  const [pageNumbers, setPageNumbers] = useState(() => {
    const initialState = generatePageNumbers("init");
    return initialState;
  });

  useEffect(() => {
    setPage(Math.ceil((skipped + limit) / limit));
    setTotalPages(Math.ceil(total / limit));
  }, [total]);

  useEffect(() => {
    setPageNumbers(generatePageNumbers());
  }, [page, totalPages]);

  useEffect(() => {
    setPage(Math.floor((skipped + limit) / limit));
    setTotalPages(Math.ceil(total / limit));
    updatePageParameters(limit, skipped);
  }, [skipped, limit]);

  const changeSkipped = (newSkipped: number) => {
    setSkipped(newSkipped);
  };

  return { skipped, limit, page, totalPages, pageNumbers, changeSkipped };
}
