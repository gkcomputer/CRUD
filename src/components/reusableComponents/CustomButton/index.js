import CustomButtonStyles from "./CustomButtonStyles";

const CrudButton = ({ children, variant, styles, type, ...rest }) => {
  return (
    <CustomButtonStyles
      variant={variant}
      sx={{ ...styles }}
      type={type}
      {...rest}
    >
      {children}
    </CustomButtonStyles>
  );
};

export default CrudButton;
