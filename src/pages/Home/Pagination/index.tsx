import BackArrowIcon from "components/icons/BackArrowIcon";
import ForwardArrowIcon from "components/icons/ForwardArrowIcon";
import SelectField from "components/SelectField";

import NumberPageButton from "./NumberPageButton";
import PageButton from "./PageButton";

interface PaginationProps {
  page: number;
  lastPageNumber: number;
  limit: number;
  pageNumbers: number[];
  changePage: (page: number) => void;
  changeLimit: (limit: number) => void;
}

const limitSelectOptions = [
  { value: "12", label: "12" },
  { value: "24", label: "24" },
  { value: "36", label: "36" },
];

export default function Pagination({
  page,
  lastPageNumber,
  limit,
  pageNumbers,
  changePage,
  changeLimit,
}: PaginationProps) {
  return (
    <nav className="flex flex-col items-center justify-center mt-8">
      <ul className="inline-flex items-center -space-x-px">
        <PageButton label="First" onClick={() => changePage(1)} StartIcon={BackArrowIcon} disabled={page === 1} />
        <PageButton label="Previous" onClick={() => changePage(page > 1 ? page - 1 : 1)} disabled={page === 1} />
        {pageNumbers.map((pageNumber) => (
          <NumberPageButton
            key={pageNumber}
            pageNumber={pageNumber}
            selected={pageNumber === page}
            onClick={() => changePage(pageNumber)}
          />
        ))}
        <PageButton
          label="Next"
          onClick={() => changePage(page < lastPageNumber ? page + 1 : lastPageNumber)}
          disabled={page === lastPageNumber}
        />
        <PageButton
          label="Last"
          onClick={() => changePage(lastPageNumber)}
          EndIcon={ForwardArrowIcon}
          disabled={page === lastPageNumber}
        />
      </ul>
      <div className="w-[100px]">
        <SelectField
          value={`${limit}`}
          onChange={(event: any) => {
            changeLimit(parseInt(event.target.value));
          }}
          options={limitSelectOptions}
          label="Items Per Page"
        />
      </div>
    </nav>
  );
}
