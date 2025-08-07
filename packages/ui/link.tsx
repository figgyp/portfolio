import type { MouseEventHandler, ReactNode } from "react";
import { clsx } from "clsx";

type Props = {
  className?: string;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

function Link({
  className,
  disabled,
  iconLeft,
  iconRight,
  href,
  target,
  rel,
  onClick,
  children,
}: Props) {
  const baseStyles = clsx(
    "inline-flex text-base gap-[6px] items-center cursor-pointer",
    "text-indigo-700 hover:text-indigo-900",
    "focus:text-indigo-900 focus:outline focus:outline-4 focus:outline-indigo-100 focus:rounded-sm", // TODO verify focus styles
  );
  const disabledStyles = "text-neutral-400 cursor-default pointer-events-none";

  const renderContent = () => {
    return (
      <>
        {iconLeft ? <span>{iconLeft}</span> : null}
        <span className="px-[2px]">{children}</span>
        {iconRight ? <span>{iconRight}</span> : null}
      </>
    );
  };

  // anchor tags do not support `disabled` attribute
  if (disabled) {
    return (
      <span
        className={clsx(baseStyles, disabledStyles)}
        aria-disabled="true"
        tabIndex={-1}
      >
        {renderContent()}
      </span>
    );
  }

  return (
    <a
      className={clsx(baseStyles, className)}
      target={target}
      href={href}
      rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
      onClick={onClick}
    >
      {renderContent()}
    </a>
  );
}

export { Link };
