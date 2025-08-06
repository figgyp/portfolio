import type { ReactNode } from "react";
import { clsx } from "clsx";

type Props = {
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
};

function Link({ className, iconLeft, iconRight, children }: Props) {
  return (
    <a className={clsx("text-base flex gap-[6px] items-center", className)}>
      {iconLeft ? <span>{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span>{iconRight}</span> : null}
    </a>
  );
}

export { Link };
