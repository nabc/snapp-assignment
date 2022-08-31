import { PageButtonSpan } from "../styled.components";

interface PageButtonProps {
  selected: boolean;
  pageNumber: number;
  onClick: (...event: any) => void;
}

export default function NumberPageButton({ selected, pageNumber, onClick }: PageButtonProps) {
  return (
    <li className="cursor-pointer" onClick={onClick}>
      <PageButtonSpan selected={selected}>{pageNumber}</PageButtonSpan>
    </li>
  );
}
