import BackArrowIcon from "components/icons/BackArrowIcon";
import ForwardArrowIcon from "components/icons/ForwardArrowIcon";

import usePagination from "./usePagination";
import NumberPageButton from "./NumberPageButton";
import PageButton from "./PageButton";

interface PaginationProps {
  total: number;
}

export default function Pagination({ total = 0 }: PaginationProps) {
  const { page, totalPages, limit, skipped, pageNumbers, changeSkipped } = usePagination(total);

  //TODO: previous button is still active when filtering on a higher page to a result with lower pages
  return (
    <nav className="flex flex-col items-center justify-center my-4">
      <ul className="inline-flex items-center -space-x-px">
        <PageButton
          label="First"
          onClick={() => changeSkipped(0)}
          StartIcon={BackArrowIcon}
          disabled={skipped - limit < 0}
        />
        <PageButton
          label="Previous"
          onClick={() => changeSkipped(skipped - limit > 0 ? skipped - limit : 0)}
          disabled={skipped - limit < 0}
        />
        {pageNumbers.map((pageNumber) => (
          <NumberPageButton
            key={pageNumber}
            pageNumber={pageNumber}
            selected={pageNumber === page}
            onClick={() => changeSkipped((pageNumber - page) * limit + skipped)}
          />
        ))}
        <PageButton
          label="Next"
          onClick={() => skipped + limit < total && changeSkipped(skipped + limit)}
          disabled={skipped + limit > total}
        />
        <PageButton
          label="Last"
          onClick={() => skipped + limit < total && changeSkipped((totalPages - 1) * limit)}
          EndIcon={ForwardArrowIcon}
          disabled={skipped + limit > total}
        />
      </ul>
    </nav>
  );
}
