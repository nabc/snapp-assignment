import { Controller, useForm } from "react-hook-form";

import { FilterQueryType } from "types";
import useParamParser from "hooks/useParamParser";
import SearchIcon from "components/icons/SearchIcon";
import ClearIcon from "components/icons/ClearIcon";
import { Div, Input, FormField, ErrorMessage } from "components/UiKit";
import SelectField from "components/SelectField";

import { SubmitButton } from "../styled.components";

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
              <FormField>
                <Input {...field} type="text" error={Boolean(errors.filter)} placeholder="Type here ..." />
                <ClearIcon onClick={clearFilter} className="h-6 w-6 absolute right-1 top-2 cursor-pointer" />
                <ErrorMessage>
                  <>{errors.filter?.message}</>
                </ErrorMessage>
              </FormField>
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
