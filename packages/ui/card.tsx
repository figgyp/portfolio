import { clsx } from "clsx";
import type { ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode;
};

function Card({ className, children }: Props) {
  return (
    <section className={clsx("bg-white rounded-lg shadow-md", className)}>
      {children}
    </section>
  );
}

export { Card };
