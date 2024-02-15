import clsx from "clsx";

const Grid = (
  props: React.ComponentPropsWithoutRef<"div"> & {
    children: React.ReactNode;
  }
) => {
  const { className, children, ...rest } = props;
  return (
    <div className={clsx("grid", className)} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
