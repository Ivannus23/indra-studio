import { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
