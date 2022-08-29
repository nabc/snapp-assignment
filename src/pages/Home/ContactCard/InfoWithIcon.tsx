import { PropsWithChildren, FC } from "react";

interface InfoWithIconProps {
  Icon: FC;
}

export default function InfoWithIcon({ children, Icon }: PropsWithChildren<InfoWithIconProps>) {
  return (
    <div className="flex my-1 inline-block w-[118px] lg:w-[168px]">
      <Icon />
      <p className="truncate block">{children}</p>
    </div>
  );
}
