import { forwardRef, Ref } from "react";

import { ErrorMessage, FormField, Input } from "components/UiKit";
import ClearIcon from "components/icons/ClearIcon";

interface InputFieldProps {
  onChange: (...event: any[]) => void;
  handleClearIconClick: (...event: any[]) => void;
  value: string;
  placeholder: string;
  errorMessage?: string;
}

const InputField = forwardRef(
  ({ placeholder, errorMessage, handleClearIconClick, ...field }: InputFieldProps, ref: Ref<any>) => {
    return (
      <FormField>
        <Input ref={ref} {...field} type="text" error={Boolean(errorMessage)} placeholder={placeholder} />
        <ClearIcon onClick={handleClearIconClick} className="h-6 w-6 absolute right-1 top-2 cursor-pointer" />
        <ErrorMessage>
          <>{errorMessage}</>
        </ErrorMessage>
      </FormField>
    );
  }
);

export default InputField;
