import { MetaModel } from "types";

interface PaginationProps {
  meta: MetaModel;
}
export default function Pagination({ meta }: PaginationProps) {
  // TODO: should have pagination ui and logic and number of items in page - should be stored in redux
  return <div>Pagination </div>;
}
