import { clsx } from "clsx";
import type { ReactNode } from "react";

const variantClasses = {
  green: ["bg-green-50", "border-green-100", "text-green-700"],
  red: ["bg-red-50", "border-red-100", "text-red-700"],
  yellow: ["bg-yellow-50", "border-yellow-100", "text-yellow-700"],
};

type Props = {
  className?: string;
  variant: "green" | "red" | "yellow";
  children: ReactNode;
};

function Badge({ className, variant, children }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2 py-[2px] text-sm",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
