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
  const { updateFilter, removeKeyFromParams } = useParamParser();

  const {
    control,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { filter: "", filterType: "first_name" } });

  const onSubmit = (data: any) => {
    const filterType = data.filterType;
    const filterData = data.filter;
    const where: FilterQueryType = { [filterType]: { contains: filterData } };
    updateFilter(where);
  };

  const clearFilter = () => {
    reset({ filter: "" }, { keepErrors: false });
    removeKeyFromParams("where");
  };

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
            rules={{
              validate: {
                required: (v) => Boolean(v) || "This field is required",
                onlyNumber: (v) => {
                  if (getValues("filterType") === "phone") {
                    return /^\d+$/.test(v) || "Only numbers are allowed!";
                  }
                  return true;
                },
                onlyChar: (v) => {
                  if (getValues("filterType") !== "phone") {
                    return /^[a-zA-Z]+$/.test(v) || "Only characters are allowed!";
                  }
                  return true;
                },
              },
            }}
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
