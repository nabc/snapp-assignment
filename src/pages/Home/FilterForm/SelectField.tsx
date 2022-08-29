import { forwardRef, Ref } from "react";
import { FormField } from "components/UiKit";

interface SelectFieldProps {
  onChange: (...event: any[]) => void;
  value: string;
  options: { value: string; label: string }[];
  label: string;
}

const SelectField = forwardRef(({ onChange, value, options, label }: SelectFieldProps, ref: Ref<HTMLInputElement>) => {
  return (
    <FormField>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>

      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 hover:border-blue-500	focus:border-blue-500"
        defaultValue={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
});

export default SelectField;
