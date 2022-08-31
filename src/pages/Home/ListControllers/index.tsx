import { fromParamsActions, useParams } from "contexts/ParamsContext";

import ItemsPerPage from "./ItemsPerPage";
import Sort from "./Sort";

export default function ListControllers() {
  const {
    state: { sortBy, sortOrder, limit },
    dispatch,
  } = useParams();

  return (
    <div className="flex flex-row justify-between mt-3">
      <Sort
        sortBy={sortBy}
        sortOrder={sortOrder}
        changeSort={(by, order) => dispatch(fromParamsActions.updateSort(by, order))}
      />
      <ItemsPerPage
        itemsPerPage={limit}
        changeItemsPerPage={(itemsPerPage) => dispatch(fromParamsActions.updateLimit(itemsPerPage))}
      />
    </div>
  );
}
