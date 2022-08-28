type MetaModel = {
  criteria: any;
  limit: number;
  skipped: number;
  total: number;
};
interface PaginationProps {
  meta: MetaModel;
}
export default function Pagination({ meta }: PaginationProps) {
  // TODO: should have pagination ui and logic and number of items in page - should be stored in redux
  return <div>Pagination </div>;
}
