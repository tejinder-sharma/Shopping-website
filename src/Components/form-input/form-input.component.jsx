const FormInput = ({label, ...otherProps}) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={otherProps.id}>{label}</label>
      <input
        {...otherProps}
      />
    </div>
  );
};

export default FormInput
