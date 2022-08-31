import usePagination from "hooks/usePagination";
import BackArrowIcon from "components/icons/BackArrowIcon";
import ForwardArrowIcon from "components/icons/ForwardArrowIcon";

import NumberPageButton from "./NumberPageButton";
import PageButton from "./PageButton";

interface PaginationProps {
  total: number;
}

export default function Pagination({ total = 0 }: PaginationProps) {
  const { skip, limit, page, totalPages, pageNumbers, changeSkip } = usePagination(total);

  return (
    <nav className="flex flex-col items-center justify-center my-4">
      <ul className="inline-flex items-center -space-x-px">
        <PageButton label="First" onClick={() => changeSkip(0)} StartIcon={BackArrowIcon} disabled={skip - limit < 0} />
        <PageButton
          label="Previous"
          onClick={() => skip - limit > 0 && changeSkip(skip - limit > 0 ? skip - limit : 0)}
          disabled={skip - limit < 0}
        />
        {pageNumbers.map((pageNumber) => (
          <NumberPageButton
            key={pageNumber}
            pageNumber={pageNumber}
            selected={pageNumber === page}
            onClick={() => changeSkip((pageNumber - page) * limit + skip)}
          />
        ))}
        <PageButton
          label="Next"
          onClick={() => skip + limit < total && changeSkip(skip + limit)}
          disabled={skip + limit > total}
        />
        <PageButton
          label="Last"
          onClick={() => skip + limit < total && changeSkip((totalPages - 1) * limit)}
          EndIcon={ForwardArrowIcon}
          disabled={skip + limit > total}
        />
      </ul>
    </nav>
  );
}
