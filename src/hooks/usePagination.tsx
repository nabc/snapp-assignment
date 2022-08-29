/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { MetaModel } from "types";

export default function usePagination({ skipped = 0, total }: Omit<MetaModel, "criteria" | "limit">) {
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(skipped > 0 ? Math.ceil(skipped / limit) : 1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);
  const lastPageNumber = Math.ceil(total / limit);

  useEffect(() => {
    let newPageNumbers = [];
    if (page < 3) {
      newPageNumbers = [1, 2, 3, 4, 5];
    } else if (page > lastPageNumber - 3) {
      newPageNumbers = [lastPageNumber - 4, lastPageNumber - 3, lastPageNumber - 2, lastPageNumber - 1, lastPageNumber];
    } else {
      newPageNumbers = [page - 2, page - 1, page, page + 1, page + 2];
    }

    setPageNumbers(newPageNumbers);
  }, [page]);

  const changePage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= lastPageNumber) {
      setPage(pageNumber);
    }
  };

  const changeLimit = (newLimit: number) => {
    setLimit(newLimit);
  };

  return { page, lastPageNumber, limit, pageNumbers, changePage, changeLimit };
}
