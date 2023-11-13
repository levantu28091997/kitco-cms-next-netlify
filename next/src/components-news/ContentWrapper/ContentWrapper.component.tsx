import clsx from "clsx";

// news pages have some 100vh sections
// for background color differentations
// this component wraps the content of each section
export function ContentWrapper({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "w-full px-6",
        "mx-auto lg:w-[1240px] lg:px-0",
      )}
    >
      {children}
    </div>
  );
}
