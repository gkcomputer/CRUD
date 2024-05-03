import CustomOutlinedInput from "./CustomOutlinedInput";

const CrudInputFeild = ({
  placeholder,
  onChange,
  name,
  value,
  // width,
  ...rest
}) => {
  return (
    <CustomOutlinedInput
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      // width={width}
      {...rest}
    />
  );
};

export default CrudInputFeild;
