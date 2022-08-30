import { Controller, useForm } from "react-hook-form";

import { FilterQueryType } from "types";
import useParamParser from "hooks/useParamParser";
import SearchIcon from "components/icons/SearchIcon";
import { Div } from "components/UiKit";
import SelectField from "components/SelectField";

import { SubmitButton } from "../styled.components";
import InputField from "components/InputField";

const filterSelectOptions = [
  { value: "first_name", label: "First Name" },
  { value: "last_name", label: "Last Name" },
  { value: "phone", label: "Phone" },
];

export default function FilterForm() {
  // TODO: add validation to input based on select value
  const { updateFilter, removeKeyFromParams } = useParamParser();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { filter: "", filterType: "first_name" } });

  const onSubmit = (data: any) => {
    const filterData = data.filter;
    const filterType = data.filterType;
    const where: FilterQueryType = { [filterType]: { contains: filterData } };
    updateFilter(where);
  };

  const clearFilter = () => {
    reset({ filter: "" }, { keepErrors: false });
    removeKeyFromParams("where");
  };

  // TODO: move Input to components

  return (
    <Div>
      <form className="flex flex-col md:flex-row md:items-end w-full mt-3 " onSubmit={handleSubmit(onSubmit)}>
        <div className="my-1 md:my-0 md:mx-1 basis-1/4">
          <Controller
            name="filterType"
            control={control}
            render={({ field }) => <SelectField {...field} options={filterSelectOptions} label="Filter By" />}
          />
        </div>
        <div className="my-1 md:my-0 md:mx-1 basis-3/4">
          <Controller
            name="filter"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <InputField
                {...field}
                handleClearIconClick={clearFilter}
                placeholder="Type here ..."
                errorMessage={errors.filter?.message}
              />
            )}
          />
        </div>
        <div className="mt-4 w-full md:my-0 md:mx-1 basis-1/6">
          <SubmitButton>
            <SearchIcon />
          </SubmitButton>
        </div>
      </form>
    </Div>
  );
}
