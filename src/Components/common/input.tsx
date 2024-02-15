import clsx from 'clsx';

const Input = (
    props: React.ComponentPropsWithoutRef<'input'> 
) => {
    const { className, name, type, ...rest } = props;
  return (
    <input
        className={clsx(
            '',
            className
        )}
        {...rest}
        name={name} id={name} 
        type={type ? type: 'text'}

   />
     
            
  
  );
};

export default Input;