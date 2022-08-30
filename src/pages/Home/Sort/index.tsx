/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import RadioInputField from "components/RadioInputField";
import SelectField from "components/SelectField";
import useParamParser from "hooks/useParamParser";

const sortSelectOptions = [
  { value: "createdAt", label: "Created Date" },
  { value: "id", label: "ID" },
  { value: "first_name", label: "First Name" },
  { value: "last_name", label: "Last Name" },
];

export default function Sort() {
  const { updateSort, removeKeyFromParams } = useParamParser();

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    if (!sortBy.length) {
      removeKeyFromParams("sort");
    } else {
      const newSortString = sortBy + " " + order;
      updateSort(newSortString);
    }
  }, [sortBy, order]);

  return (
    <div className="flex flex-row justify-start mt-3">
      <div className="my-1 md:my-0 md:mx-1 basis-1/4">
        <SelectField
          hasDefaultOption
          value={sortBy}
          onChange={(event: any) => {
            setSortBy(event.target.value);
          }}
          options={sortSelectOptions}
          label="Sort By"
        />
      </div>
      {sortBy.length > 0 && (
        <div className="flex flex-col items-start justify-end my-1 md:my-0 md:mx-1 basis-1/4">
          <RadioInputField
            checked={order === "ASC"}
            value="ASC"
            label="Ascending"
            onChange={(event: any) => {
              setOrder(event.target.value);
            }}
          />
          <RadioInputField
            checked={order === "DESC"}
            value="DESC"
            label="Descending"
            onChange={(event: any) => {
              setOrder(event.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
}
