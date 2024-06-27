const InputLabel = ({
  label,
  inputClasses,
  id,
  name,
  inputType,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2 flex-wrap">
      <label className="text-gray-800 font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={inputType}
        placeholder={placeholder}
        className={`${inputClasses}  rounded-xl p-2  bg-sky-100 focus:outline-none focus:border-none placeholder:text-gray-700`}
      />
    </div>
  );
};

export default InputLabel;
