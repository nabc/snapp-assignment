import RadioInputField from "components/RadioInputField";
import SelectField from "components/SelectField";

const sortSelectOptions = [
  { value: "createdAt", label: "Created Date" },
  { value: "id", label: "ID" },
  // { value: "first_name", label: "First Name" },
  // { value: "last_name", label: "Last Name" },
];

interface SortProps {
  sortBy: string;
  sortOrder: string;
  changeSort(by: string, order: string): void;
}
export default function Sort({ sortBy, sortOrder, changeSort }: SortProps) {
  return (
    <div className="flex flex-row my-1 md:my-0 md:mx-1 basis-3/8">
      <SelectField
        hasDefaultOption
        value={sortBy}
        onChange={(event: any) => {
          changeSort(event.target.value, sortOrder);
        }}
        options={sortSelectOptions}
        label="Sort By"
      />
      <div className="flex flex-col items-start justify-end my-1 md:my-0 md:mx-1 ">
        <RadioInputField
          checked={sortOrder === "ASC"}
          value="ASC"
          label="Ascending"
          onChange={(event: any) => {
            changeSort(sortBy, event.target.value);
          }}
        />
        <RadioInputField
          checked={sortOrder === "DESC"}
          value="DESC"
          label="Descending"
          onChange={(event: any) => {
            changeSort(sortBy, event.target.value);
          }}
        />
      </div>
    </div>
  );
}
