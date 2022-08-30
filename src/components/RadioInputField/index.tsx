import { forwardRef, Ref } from "react";

interface RadioInputFieldProps {
  checked: boolean;
  label: string;
  value: string;
  onChange: (...event: any[]) => void;
}

const RadioInputField = forwardRef(({ checked, label, value, onChange }: RadioInputFieldProps, ref: Ref<any>) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        checked={checked}
        value={value}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  );
});

export default RadioInputField;
