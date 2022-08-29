import { FC } from "react";

import { PageButtonSpan } from "components/UiKit";

interface PageButtonProps {
  onClick: (...event: any) => void;
  disabled: boolean;
  label: string;
  StartIcon?: FC;
  EndIcon?: FC;
}

export default function PageButton({ label, disabled, onClick, StartIcon, EndIcon }: PageButtonProps) {
  return (
    <li className="cursor-pointer" onClick={onClick}>
      <PageButtonSpan disabled={disabled}>
        {typeof StartIcon !== "undefined" && <StartIcon />}
        {label}
        {typeof EndIcon !== "undefined" && <EndIcon />}
      </PageButtonSpan>
    </li>
  );
}
