import clsx from 'clsx';

const Input = (
  props: React.ComponentPropsWithoutRef<'input'> & {
    error?: boolean;
  }
) => {
  const { className, name, type, error, ...rest } = props;
  return (
    <input
      className={clsx('', className, { 'border border-red-500': error })}
      {...rest}
      name={name}
      id={name}
      type={type ? type : 'text'}
    />
  );
};

export default Input;
