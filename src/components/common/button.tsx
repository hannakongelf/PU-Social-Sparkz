import clsx from 'clsx';

const Button = (
  props: React.ComponentPropsWithoutRef<'button'> & {
    children: React.ReactNode;
  }
) => {
  const { className, children, ...rest } = props;
  return (
    <button
      className={clsx(
        'px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
