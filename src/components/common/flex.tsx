import clsx from "clsx";

const Flex = (
  props: React.ComponentPropsWithoutRef<"div"> & {
    children: React.ReactNode;
  }
) => {
  const { className, children, ...rest } = props;
  return (
    <div className={clsx("flex justify-between", className)} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
