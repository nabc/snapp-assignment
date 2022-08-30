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

const limitSelectOptions = [
  { value: "12", label: "12" },
  { value: "24", label: "24" },
  { value: "36", label: "36" },
];

export default function Sort() {
  const { searchParams, limit, setLimit, updateSort, removeKeyFromParams } = useParamParser();
  const sortParamsArray = searchParams.get("sort")?.split(" ");
  console.log(sortParamsArray);

  const [sortBy, setSortBy] = useState(sortParamsArray ? sortParamsArray[0] : "");
  const [order, setOrder] = useState(sortParamsArray ? sortParamsArray[1] : "ASC");

  const generateSortString = () => {
    const newSortString = sortBy + " " + order;
    updateSort(newSortString);
  };
  useEffect(() => {
    if (!sortBy.length) {
      removeKeyFromParams("sort");
    } else {
      generateSortString();
    }
  }, [sortBy]);

  useEffect(() => {
    if (sortBy.length) {
      generateSortString();
    }
  }, [order]);

  return (
    <div className="flex flex-row justify-between mt-3">
      <div className="flex flex-row my-1 md:my-0 md:mx-1 basis-3/8">
        <SelectField
          hasDefaultOption
          value={sortBy}
          onChange={(event: any) => {
            setSortBy(event.target.value);
          }}
          options={sortSelectOptions}
          label="Sort By"
        />
        <div className="flex flex-col items-start justify-end my-1 md:my-0 md:mx-1 ">
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
      </div>
      <div className="my-1 md:my-0 md:mx-1 basis-1/8">
        <SelectField
          value={`${limit}`}
          onChange={(event: any) => {
            setLimit(parseInt(event.target.value));
          }}
          options={limitSelectOptions}
          label="Items Per Page"
        />
      </div>
    </div>
  );
}
